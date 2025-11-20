import { GitHub, ExternalLink } from './svgs';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

function ProjectCard({ ...props }: ProjectCardProps) {
  return (
    <div className="group bg-base-200 border border-base-content/10 rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
      {/* Project Image */}
      <div className="relative overflow-hidden h-40 tablet:h-48 bg-base-300">
        <Image 
          alt={props.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={props.image}
          fill
          sizes='(min-width: 0px) 100%'
          priority
        />
      </div>
      
      {/* Project Content */}
      <div className="p-4 tablet:p-6 space-y-3 tablet:space-y-4">
        <h3 className="text-lg tablet:text-xl font-semibold text-base-content">{props.title}</h3>
        <p className="text-sm text-base-content/70 leading-relaxed">{props.description}</p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 tablet:gap-2">
          {props.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 tablet:px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col tablet:flex-row gap-2 tablet:gap-3 pt-1 tablet:pt-2">
          {props.liveUrl && (
            <a 
              href={props.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 flex-1 px-3 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {props.githubUrl && (
            <a 
              href={props.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 flex-1 px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-medium"
            >
              <GitHub className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;