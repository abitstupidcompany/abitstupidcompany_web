import Navigation from "../../components/common/Navigation/Navigation";
import { navLinks } from "./config";

export default function Home() {
	return (
		<>
			<section className="overflow-hidden relative h-screen w-screen flex flex-col justify-start items-start text-black">
				{/* background gradient */}
				<div
					id="gradient"
					className="-z-10 absolute -top-[30%] -left-[30%] h-full w-full"
				>
					<img
						src="/assets/images/hero-gradient.png"
						alt="Hero Gradient"
						className="w-[300%] h-[100%] object-cover scale-125 blur-2xl"
					/>
				</div>

				{/* header */}
				<header className="w-full absolute h-[120px]">
					{/* navigation */}
					<Navigation />
				</header>

				{/* BODY - HERO */}
				<article className="mx-auto max-w-[1500px] md:pr-[40px] w-full h-full flex no-wrap justify-between items-center flex-col md:flex-row pt-[140px] pr-0 md:pt-0">
					{/* left - text title */}
					<div className="pb-[20px] font-clash-var md:w-full flex flex-col items-center justify-center gap-4">
						<h1 className="w-auto flex flex-col text-[50px] md:text-[60px] lg:text-[80px] tracking-wide text-black font-black leading-[45px] md:leading-[80px] items-center justify-center whitespace-nowrap">
							A Bit Stupid <span>Company</span>
						</h1>
						<p className="text-lg tracking-wide">
							We're dead serious about our work.
						</p>
					</div>
					{/* RIGHT - HERO IMAGE */}
					<div className="flex items-center justify-center md:min-w-[45%] h-[70%]">
						<img
							src="/assets/images/hero-img.svg"
							alt="Hero Image"
							className="w-auto h-full object-contain animate-up-down"
						/>
					</div>
				</article>
			</section>
		</>
	);
}
