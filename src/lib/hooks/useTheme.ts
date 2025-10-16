'use client'

import { useState, useEffect } from 'react'
import { getPreferredColorScheme } from '@/lib/utils'
import { Theme } from '@/app/config'

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null

		if (savedTheme) {
			setTheme(savedTheme)
		} else {
			const preferredColorScheme = getPreferredColorScheme()
			if (preferredColorScheme !== 'no-preference') {
				setTheme(preferredColorScheme)
			}
		}
	}, [])

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return { theme, setTheme }
}
