import { Download } from './svgs';

type DownloadItem = {
  title: string;
  description: string;
  icon: string;
  url: string;
  fileType: string;
};

type DownloadCardsProps = {
  items: DownloadItem[];
};

function DownloadCards({ items }: DownloadCardsProps) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:gap-6">
      {items.map((item, idx) => {
        return (
          <a
            key={idx}
            href={item.url}
            download
            className="group bg-base-200 border border-base-content/10 rounded-xl p-6 tablet:p-8 hover:border-primary transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <Download className="w-10 h-10 text-primary" />
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                {item.fileType}
              </span>
            </div>

            <h3 className="text-lg tablet:text-xl font-semibold mb-2 text-base-content">{item.title}</h3>
            <p className="text-sm text-base-content/70 mb-4 tablet:mb-6">{item.description}</p>

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

export default DownloadCards;