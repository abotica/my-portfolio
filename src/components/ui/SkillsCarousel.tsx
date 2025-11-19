import { useEffect, useRef } from 'react'
import { frontendSkills, backendDevOpsSkills } from '../../app/[locale]/config';

function SkillsCarousel() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // Continuous scrolling animation using transforms
  useEffect(() => {
    const topRowContainer = topRowRef.current?.querySelector('.inline-flex') as HTMLElement;
    const bottomRowContainer = bottomRowRef.current?.querySelector('.inline-flex') as HTMLElement;

    if (!topRowContainer || !bottomRowContainer) return;

    let topPosition = 0;
    let bottomPosition = 0;
    let topAnimationId: number;
    let bottomAnimationId: number;

    const animateTopRow = () => {
      topPosition -= 0.5; // Move left (negative direction)
      
      // Get the width of one set of skills (1/4 of total width since we have 4 copies)
      const resetPoint = -(topRowContainer.offsetWidth / 4);
      
      if (topPosition <= resetPoint) {
        topPosition = 0; // Reset for seamless loop
      }
      
      topRowContainer.style.transform = `translateX(${topPosition}px)`;
      topAnimationId = requestAnimationFrame(animateTopRow);
    };

    const animateBottomRow = () => {
      bottomPosition -= 0.5; // Move left (same as top row for right-to-left effect)
      
      // Get the width of one set of skills (1/4 of total width since we have 4 copies)  
      const resetPoint = -(bottomRowContainer.offsetWidth / 4);
      
      if (bottomPosition <= resetPoint) {
        bottomPosition = 0; // Reset for seamless loop
      }
      
      bottomRowContainer.style.transform = `translateX(${72 + bottomPosition}px)`;
      bottomAnimationId = requestAnimationFrame(animateBottomRow);
    };

    // Start animations
    animateTopRow();
    animateBottomRow();

    return () => {
      cancelAnimationFrame(topAnimationId);
      cancelAnimationFrame(bottomAnimationId);
    };
  }, []);

  return (
    <div className="w-full space-y-4">
      {/* Top row - Frontend skills moving left to right */}
      <div className="relative">
        <div 
          className="overflow-hidden whitespace-nowrap" 
          ref={topRowRef}
        >
          <div className="inline-flex">
            {/* Multiple copies for seamless infinite scroll */}
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((skill, index) => (
              <div key={`frontend-${index}`} className="inline-block mx-2">
                <div className="bg-base-200 border border-base-content/10 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <skill.Icon className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-base-content text-center">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left shadow gradient */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-base-100 via-base-100/80 to-transparent pointer-events-none z-10"></div>
        {/* Right shadow gradient */}
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-base-100 via-base-100/80 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom row - Backend/DevOps skills moving right to left */}
      <div className="relative">
        <div 
          className="overflow-hidden whitespace-nowrap" 
          ref={bottomRowRef}
        >
          <div className="inline-flex">
            {/* Multiple copies for seamless infinite scroll */}
            {[...backendDevOpsSkills, ...backendDevOpsSkills, ...backendDevOpsSkills, ...backendDevOpsSkills].map((skill, index) => (
              <div key={`backend-${index}`} className="inline-block mx-2">
                <div className="bg-base-200 border border-base-content/10 rounded-xl p-6 w-32 h-32 flex flex-col items-center justify-center hover:border-primary hover:shadow-lg transition-all duration-300 group">
                  <skill.Icon className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-base-content text-center">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left shadow gradient */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-base-100 via-base-100/80 to-transparent pointer-events-none z-10"></div>
        {/* Right shadow gradient */}
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-base-100 via-base-100/80 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}

export default SkillsCarousel;