"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
	{ href: "#home", label: "home", number: "01" },
	{ href: "#expertise", label: "expertise", number: "02" },
	{ href: "#experience", label: "experience", number: "03" },
	{ href: "#contact", label: "contact", number: "04" },
];

export default function NavBar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);

			const scrollPos = window.scrollY + window.innerHeight / 3;
			for (const item of navItems) {
				if (!item.href.startsWith("#")) continue;
				const section = document.querySelector(item.href);
				if (section) {
					const offsetTop =
						section.getBoundingClientRect().top + window.scrollY;
					const offsetBottom = offsetTop + section.clientHeight;
					if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
						setActiveSection(item.href);
						return;
					}
				}
			}
			setActiveSection("");
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 w-full z-50 py-4 px-8 sm:px-12 transition duration-500
        ${scrolled ? "backdrop-blur-3xl bg-black/70" : "bg-transparent"}`}
		>
			<div className="flex justify-between items-center relative">
				<div
					className={`flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg transition-opacity duration-300 z-0
            ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
				>
					TG
				</div>

				<div className="hidden sm:flex gap-10 text-lg text-gray-400 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
					{navItems.map(({ href, label, number }) => {
						const isActive =
							activeSection === href || pathname.startsWith(href);
						return (
							<Link
								key={href}
								href={href}
								className="relative group hover:text-white transition flex items-center"
								onClick={() => setIsOpen(false)}
							>
								{/* biome-ignore lint/suspicious/noCommentText: navItem decoration */}
								<span className="text-indigo-500 mr-2">//</span>
								<span className="relative inline-block">
									{label}
									<span className="absolute -top-4 right-0 text-indigo-400 text-xs font-thin opacity-70 group-hover:text-indigo-300">
										{number}
									</span>
								</span>
								<span className="ml-2 w-[10px] h-[20px] relative">
									<span
										className={`block w-full h-full bg-indigo-400 transition-opacity duration-300 ${
											isActive ? "animate-blink opacity-100" : "opacity-0"
										}`}
									/>
								</span>
							</Link>
						);
					})}
				</div>

				<button
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					className="sm:hidden text-indigo-400 z-50"
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<title>Close menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<title>Open menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{isOpen && (
				<div className="flex flex-col items-start gap-6 mt-6 text-lg text-gray-200 sm:hidden px-2">
					{navItems.map(({ href, label, number }) => (
						<Link
							key={href}
							href={href}
							onClick={() => setIsOpen(false)}
							className="relative group hover:text-white transition flex items-center"
						>
							{/* biome-ignore lint/suspicious/noCommentText: navItem decoration */}
							<span className="text-indigo-500 mr-2">//</span>
							<span className="relative inline-block">
								{label}
								<span className="absolute -top-4 right-0 text-indigo-400 text-xs font-thin opacity-70 group-hover:text-indigo-300">
									{number}
								</span>
							</span>
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
