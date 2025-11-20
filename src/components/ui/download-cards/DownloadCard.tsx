import { Download } from '../svgs';
import { DownloadCardsProps } from '@/app/[locale]/config';

function DownloadCard({ items }: DownloadCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, idx) => {
        return (
          <a
            key={idx}
            href={item.url}
            download
            className="group bg-base-200 border border-base-content/10 rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <Download className="w-10 h-10 text-primary" />
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                {item.fileType}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-base-content">{item.title}</h3>
            <p className="text-sm text-base-content/70 mb-6">{item.description}</p>

            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              <Download className="w-4 h-4" />
              <span>Download</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default DownloadCard;