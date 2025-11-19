import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef } from 'react'
import {
  React,
  TypeScript,
  TailwindCSS,
  NodeJS,
  Docker,
  Figma,
  SEO,
  SCSS
} from './svgs';

// Available skill SVGs from the svgs folder
const skillIcons = [
  { name: 'React', Icon: React },
  { name: 'TypeScript', Icon: TypeScript },
  { name: 'Tailwind CSS', Icon: TailwindCSS },
  { name: 'Node.js', Icon: NodeJS },
  { name: 'Docker', Icon: Docker },
  { name: 'Figma', Icon: Figma },
  { name: 'SEO', Icon: SEO },
  { name: 'SCSS', Icon: SCSS },
];

function SkillsCarousel() {
  // Top row - left to right
  const [topRowRef, topRowApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: false,
    dragFree: true,
    duration: 50
  });

  // Bottom row - right to left
  const [bottomRowRef, bottomRowApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: false,
    dragFree: true,
    duration: 50
  });

  const topHoveredRef = useRef(false);
  const bottomHoveredRef = useRef(false);

  useEffect(() => {
    if (!topRowApi) return;
    
    let intervalId: NodeJS.Timeout;
    
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!topHoveredRef.current && topRowApi) {
          topRowApi.scrollNext();
        }
      }, 2000); // Much slower - 2 seconds between slides
    };
    
    startScroll();
    
    return () => {
      clearInterval(intervalId);
    };
  }, [topRowApi]);

  useEffect(() => {
    if (!bottomRowApi) return;
    
    let intervalId: NodeJS.Timeout;
    
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!bottomHoveredRef.current && bottomRowApi) {
          bottomRowApi.scrollPrev();
        }
      }, 2000); // Much slower - 2 seconds between slides
    };
    
    startScroll();
    
    return () => {
      clearInterval(intervalId);
    };
  }, [bottomRowApi]);

  return (
    <div className="w-full space-y-4">
      {/* Top row - moves left to right */}
      <div 
        className="embla overflow-hidden" 
        ref={topRowRef}
        onMouseEnter={() => { topHoveredRef.current = true; }}
        onMouseLeave={() => { topHoveredRef.current = false; }}
      >
        <div className="embla__container flex">
          {/* Triple the skills for seamless infinite scroll */}
          {[...skillIcons, ...skillIcons, ...skillIcons].map((skill, index) => (
            <div key={`top-${index}`} className="embla__slide flex-[0_0_144px] mx-2">
              <div className="bg-base-200 border border-base-content/10 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <skill.Icon className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-base-content text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - moves right to left */}
      <div 
        className="embla overflow-hidden" 
        ref={bottomRowRef}
        onMouseEnter={() => { bottomHoveredRef.current = true; }}
        onMouseLeave={() => { bottomHoveredRef.current = false; }}
      >
        <div className="embla__container flex">
          {/* Triple the skills for seamless infinite scroll */}
          {[...skillIcons, ...skillIcons, ...skillIcons].map((skill, index) => (
            <div key={`bottom-${index}`} className="embla__slide flex-[0_0_144px] mx-2">
              <div className="bg-base-200 border border-base-content/10 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                <skill.Icon className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-base-content text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsCarousel;