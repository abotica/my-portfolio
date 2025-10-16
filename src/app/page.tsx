import { Hero } from "@/components/ui/svgs";

export default function Home() {
	return (
		<main className='min-h-screen'>
			{/* Calculated height dynamically with calc */}
			<section className="flex flex-col items-center min-h-screen">
				<div className="flex flex-col items-center">
					<p className="text-base-content/70">Oy, I'm</p>
					<h1 className="text-primary">Andrija Botica</h1>
					<h2 className="text-primary">Beskucnik</h2>
				</div>
				<Hero className='text-primary'/>
			</section>
		</main>
	);
}
