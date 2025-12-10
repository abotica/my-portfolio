import ProjectCard from '@/components/ui/ProjectCard';
import { Translator } from '@/app/[locale]/config';

type CardContainerProps = {
    repos: {
        title: string;
        description: string | null;
        technologies: string[];
        liveUrl: string | null;
        githubUrl: string;
        language: string | null;
    }[] | undefined;
    title: string | undefined;
    t: Translator;
};

function CardContainer({repos, title, t}: CardContainerProps) {
	return (
        <div>
            <h2 className='pb-2 font-bold'>{title}</h2>
            <div className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:gap-6'>
                    
                            {repos ? repos?.map((repo, i) => (
                                <ProjectCard
                                    t={t}
                                    key={i}
                                    title={repo.title}
                                    description={repo.description}
                                    technologies={repo.technologies}
                                    liveUrl={repo.liveUrl}
                                    githubUrl={repo.githubUrl}
                                    language={repo.language}
                                />
                            )) : <p className='text-lg text-base-content/70 leading-relaxed mb-6 tablet:mb-8'>{t('FeaturedProjectsSection.noProjectsFound')}</p>}
            
                        </div>
        </div>
	);
}

export default CardContainer;
