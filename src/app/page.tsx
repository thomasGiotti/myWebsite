"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // icône propre
import ExpertisesPage from "./expertises/page";
import { jetBrainsMono } from "./utils/fonts";
import ExperiencePage from "./experiences/page";
import ContactPage from "./contact/page";



export default function Home() {
	return (
		<>
			<main
				id="home"
				className="flex flex-col items-center justify-center min-h-screen text-white px-4 relative overflow-hidden"
			>
				<h1
					className={`${jetBrainsMono.className} text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-wide `}
					style={{ animationTimingFunction: "steps(12)" }}
				>
					<span className="text-indigo-400">&lt;</span>
					Thomas Giotti
					<span className="text-indigo-400">/&gt;</span>
				</h1>
				{/* Sous-titre animé */}
				<motion.p
					className="text-gray-300 text-lg md:text-2xl text-center max-w-xl mt-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.5 }}
				>
					Full-stack, Frontend & Mobile Developer
				</motion.p>

				{/* Scroll hint */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 1 }}
					className="absolute bottom-6 flex justify-center w-full"
				>
					<a href="#about" className="flex flex-col items-center group">
						<ChevronDown
							size={32}
							className="text-indigo-400 animate-bounce group-hover:text-indigo-300 transition"
						/>
					</a>
				</motion.div>
			</main>
			<ExpertisesPage />
      <ExperiencePage />
      <ContactPage />
		</>
	);
}
