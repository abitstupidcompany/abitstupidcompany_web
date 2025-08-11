import { useEffect, useState } from "react";
import { navLinks } from "../../../pages/home/config";
import NavBtn from "./NavBtn";

export default function Navigation() {
	const [isSmallNav, setIsSmallNav] = useState(true);
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		const mdBreakpoint = 768; // Tailwind's default md
		const handleResize = () => {
			setIsSmallNav(window.innerWidth < mdBreakpoint);
		};

		// Run on mount
		handleResize();

		// Listen to resize
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<nav className="relative w-full h-full flex items-center justify-between px-[60px]">
				{/* logo */}
				<div className="w-[100px] h-[100px]">
					<img
						src="/assets/images/logo.svg"
						alt="Logo"
						className="w-auto h-full object-contain"
					/>
				</div>
				{/* nav links */}
				{isSmallNav ? (
					<div>
						<NavBtn
							setShowNav={setShowNav}
							showNav={showNav}
						/>
						{showNav && (
							<div className="z-10 absolute h-[500px] w-[500px] -top-30 -right-30">
								{/*  NAV BLOB*/}
								<svg
									viewBox="0 0 200 200"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="#6755B9"
										d="M45.6,-69.4C56.9,-63.7,62.3,-47.3,65.9,-32.2C69.5,-17.1,71.2,-3.3,71.3,11.7C71.3,26.7,69.7,42.8,61.7,55.2C53.7,67.5,39.2,75.9,24.4,78C9.5,80,-5.7,75.7,-21.1,71.4C-36.5,67.1,-52,62.8,-60.4,52.6C-68.7,42.4,-69.7,26.3,-69.4,11.5C-69.1,-3.2,-67.4,-16.6,-61.5,-27.5C-55.6,-38.4,-45.5,-46.8,-34.6,-52.6C-23.6,-58.4,-11.8,-61.6,2.7,-65.8C17.2,-70,34.3,-75,45.6,-69.4Z"
										transform="translate(100 100)"
										className="opacity-100 backdrop-blur-3xl"
									/>
								</svg>
								<NavBtn
									setShowNav={setShowNav}
									variant="white"
									className="flex flex-col gap-1 cursor-pointer z-20 absolute right-44 top-40 text-white"
								/>
								<ul className="z-40 absolute top-50 right-70 flex flex-col gap-[30px] font-display text-3xl underline underline-offset-2">
									{navLinks.map((link) => (
										<li
											key={link.label}
											className="cursor-pointer text-gray-200 hover:text-white decoration-white hover:decoration-white"
										>
											{link.label}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				) : (
					<ul className="flex gap-[60px] font-display text-2xl underline underline-offset-2">
						{navLinks.map((link) => (
							<li
								key={link.label}
								className="cursor-pointer text-gray-500 hover:text-gray-800 decoration-gray-500 hover:decoration-gray-800"
							>
								{link.label}
							</li>
						))}
					</ul>
				)}
			</nav>
		</>
	);
}
