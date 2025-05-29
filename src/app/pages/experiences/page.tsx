// app/experience/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaPhp, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiFlutter } from "react-icons/si";
import Image from "next/image";

export default function ExperiencePage() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const experiences = [
		{
			title: "Développeur Full-Stack @ SII",
			company: "sii",
			logo: "/logos/sii.png",
			date: "2023 - aujourd'hui",
			mission:
				"Intervention stratégique pour Thales : développement et amélioration continue d'une interface Angular robuste couplée à un back-end .NET performant.",
			icons: [<FaAngular />, <SiDotnet />],

			tasks: [
				"Amélioration de l’interface utilisateur et ajout de fonctionnalités.",
				"Refactoring du code pour améliorer la maintenabilité.",
				"Maintenance corrective et évolutive (TMA).",
			],
		},
		{
			title: "Développeur Full-Stack @ Randstad Digital",
			company: "randstad",
			logo: "/logos/randstad.png",
			date: "2022 - 2023",
			mission:
				"Refonte complète d’éléments critiques du système militaire SICSD chez Safran, avec un focus sur l'expérience utilisateur et la stabilité côté React/Java.",
			icons: [<FaReact />, <FaJava />],
			tasks: [
				"Refonte de composants UI et logique métier pour le système SICSD (Scorpion).",
				"Optimisation du code et résolution de bugs.",
			],
		},
		{
			title: "Développeur Full-Stack @ Akkodis",
			company: "akkodis",
			logo: "/logos/akkodis.svg",
			date: "2020 - 2022",
			height: 200,
			width: 200,
			mission:
				"Pilotage du développement mobile et web pour Biogaran : déploiement de solutions React Native et Node.js innovantes centrées utilisateur.",
			icons: [<FaReact />, <FaNodeJs />, <SiFlutter />],
			tasks: [
				"Création de 3 applications mobiles (React Native + Express.js).",
				"Développement de 2 applications web (React.js + Nest.js).",
				"Refonte du site inria.fr et maintenance de plusieurs plateformes.",
			],
		},
		{
			title: "Développeur PHP @ Adimeo",
			company: "adimeo",
			logo: "/logos/adimeo.png",
			date: "2019 - 2020",
			mission:
				"Support de plateformes Drupal à haute visibilité : maintenance évolutive et développement de modules personnalisés dans un environnement agile.",
			icons: [<FaPhp />],
			tasks: [
				"Maintenance de sites Drupal et développement de modules personnalisés.",
			],
		},
	];

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
		}),
	};

	return (
		<section
			id="experience"
			className="relative py-24 px-6 sm:px-12 lg:px-24 text-white bg-transparent"
		>
			<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-400">
				Expériences professionnelles
			</h2>

			<div className="space-y-14 max-w-4xl mx-auto relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-[2px] before:bg-indigo-500/30">
				{experiences.map((exp, i) => (
					<motion.div
						key={i}
						className="relative pl-12 border-l-4 border-transparent cursor-pointer"
						custom={i}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={cardVariants}
						onClick={() => setActiveIndex(activeIndex === i ? null : i)}
					>
						<div className="absolute -left-1 top-2 w-4 h-4 rounded-full bg-indigo-400 shadow-lg" />
						<div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-indigo-500/30 transition duration-500">
							<div className="flex justify-between items-center mb-3">
								<h3 className="text-xl md:text-2xl font-semibold text-indigo-300">
									{exp.title}
								</h3>
								<Image
									src={exp.logo}
									alt={exp.company}
									width={exp?.width ?? 100}
									height={exp?.height ?? 100}
									className="rounded-full  p-1"
								/>
							</div>
							<p className="text-sm text-gray-400 italic mb-1">{exp.date}</p>
							<p className="text-sm text-gray-300 mb-2 italic">{exp.mission}</p>
							{activeIndex === i && (
								<>
									<div className="flex gap-3 text-indigo-400 text-xl mb-4">
										{exp.icons.map((icon, index) => (
											<span key={index}>{icon}</span>
										))}
									</div>
									<ul className="list-disc list-inside text-gray-200 space-y-1">
										{exp.tasks.map((task, j) => (
											<li key={j}>{task}</li>
										))}
									</ul>
								</>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
