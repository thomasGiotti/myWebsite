"use client";

import { jetBrainsMono, sora } from "../utils/fonts";
import { FaReact, FaMobileAlt, FaServer } from "react-icons/fa";
import CodeEditorBackground from "../components/CodeEditorBackground";

const expertiseItems = [
	{
		title: "Mobile Apps",
		description:
			"React Native & Flutter for performant cross-platform mobile apps.",
		icon: <FaMobileAlt size={40} className="text-violet-500" />,
		colors: "from-violet-500 to-indigo-600",
	},
	{
		title: "Frontend",
		description:
			"React, Angular & Next.js for dynamic and responsive user interfaces.",
		icon: <FaReact size={40} className="text-cyan-400" />,
		colors: "from-cyan-400 to-blue-600",
	},
	{
		title: "Fullstack",
		description:
			"Java, .NET, JavaScript & TypeScript for scalable backend solutions.",
		icon: <FaServer size={40} className="text-green-400" />,
		colors: "from-green-400 to-emerald-600",
	},
];

export default function ExpertiseSection() {
	return (
		<section
			id="expertise"
			className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white"
		>
			<h2
				className={`${jetBrainsMono.className} text-3xl md:text-5xl font-bold mb-12`}
			>
				My <span className="text-indigo-400">Expertise</span>
			</h2>
			<p className={`${sora.className} max-w-2xl text-gray-300 text-lg mb-16`}>
				I build modern and scalable apps using cutting-edge technologies and
				frameworks.
			</p>
                <CodeEditorBackground />
			<div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center">
				{expertiseItems.map(({ title, description, icon, colors }) => (
					<div
						key={title}
						className={`
							group relative flex flex-col items-center p-8 rounded-xl
							bg-gradient-to-br ${colors} shadow-xl
							hover:scale-105 transition-transform duration-300
							border border-transparent hover:border-indigo-500
							cursor-default
							`}
					>
						<div
							className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full
              bg-white bg-opacity-20 backdrop-blur-md flex items-center justify-center
              transform group-hover:scale-110 transition-transform duration-300"
						>
							{icon}
						</div>

						<h3
							className={`${jetBrainsMono.className} mt-12 text-xl md:text-2xl font-semibold text-white`}
						>
							{title}
						</h3>
						<p className={`${sora.className} mt-3 text-gray-300 text-center`}>
							{description}
						</p>

						{/* Decoration */}
						<div
							className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1
              rounded-full bg-white bg-opacity-30
              group-hover:bg-opacity-70 transition-opacity duration-300"
						/>
					</div>
				))}
			</div>

		</section>
	);
}
