import ProjectCard from '@/components/ui/ProjectCard';
import { useTranslations } from 'next-intl';
type Translator = ReturnType<typeof useTranslations>;

type CardContainerProps = {
    repos: {
        title: string;
        description: string | null;
        technologies: string[];
        liveUrl: string | null;
        githubUrl: string;
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
                                />
                            )) : <p>{t('FeaturedProjectsSection.noProjectsFound')}</p>}
            
                        </div>
        </div>
	);
}

export default CardContainer;
