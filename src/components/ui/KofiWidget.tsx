'use client';

import Script from 'next/script';
import { useEffect, useState, useRef } from 'react';

export default function KofiWidget() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    // We use a ref to throttle rapid changes/flickering
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // This function handles the actual drawing
    const drawWidget = () => {
        // 1. Clean up previous widget
        const existingWidget = document.querySelector('.floatingchat-container-wrap');
        if (existingWidget) existingWidget.remove();

        // 2. Read the FRESH styles from the DOM
        // Note: We check both body and html to be safe
        const rootStyles = getComputedStyle(document.documentElement);
        const bodyStyles = getComputedStyle(document.body);
        
        // Prioritize the variable, fallback to hardcoded blue
        const primaryColor = 
            rootStyles.getPropertyValue('--color-primary').trim() || 
            bodyStyles.getPropertyValue('--color-primary').trim() || 
            '#00b9fe';
            
        const textColor = 
            rootStyles.getPropertyValue('--color-primary-content').trim() || 
            bodyStyles.getPropertyValue('--color-primary-content').trim() || 
            '#ffffff';

        // 3. Draw
        // @ts-ignore
        if (window.kofiWidgetOverlay) {
            // @ts-ignore
            window.kofiWidgetOverlay.draw('abotica', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': primaryColor,
                'floating-chat.donateButton.text-color': textColor
            });
        }
    };

    useEffect(() => {
        if (!isScriptLoaded) return;

        // --- THE OBSERVER LOGIC ---
        
        // 1. Define what to do when the DOM changes (e.g. class="dark" is added)
        const observerCallback = () => {
            // Clear any pending redraws
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            
            // Wait a tiny bit (50ms) to allow the CSS variables to propagate
            timeoutRef.current = setTimeout(() => {
                drawWidget();
            }, 50);
        };

        // 2. Create the observer
        const observer = new MutationObserver(observerCallback);

        // 3. Start watching the <html> and <body> tags for attribute changes (like class or data-theme)
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });

        // 4. Initial draw (in case we loaded fresh)
        drawWidget();

        // Cleanup
        return () => {
            observer.disconnect();
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isScriptLoaded]); // We removed 'theme' dependency. We rely on the DOM now.

    return (
        <Script
            src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
            strategy='lazyOnload'
            onLoad={() => setIsScriptLoaded(true)}
        />
    );
}