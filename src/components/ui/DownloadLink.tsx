import { Download } from './svgs';

function DownloadLink({
	label,
	fileName,
}: {
	label: string;
	fileName: string;
}) {
	return (
		<a
			href={`/downloadables/${fileName}`}
			className='btn btn-lg btn-accent border-radius-theme text-primary-content flex justify-center items-center gap-1 h-8 w-max'
			download>
			<Download className='h-2/3 w-auto text-primary-content' />
			{label}
		</a>
	);
}

export default DownloadLink;
