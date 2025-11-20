import DownloadCard from './DownloadCard';
import { DownloadCardsProps } from '@/app/[locale]/config';

function DownloadCardsGrid({items} : DownloadCardsProps) {
    return (
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:gap-6">
            {items.map((item, idx) => (
                <DownloadCard key={idx} items={[item]} />
            ) )}

        </div>
    );
}

export default DownloadCardsGrid;