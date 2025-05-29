// app/contact/page.tsx
"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "fr" | "en";

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const browserLang: Lang = navigator.language.startsWith("en") ? "en" : "fr";
    setLang(browserLang);
  }, []);

  const texts: Record<Lang, { title: string; github: string; linkedin: string }> = {
    fr: {
      title: "Me retrouver en ligne",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    en: {
      title: "Find me online",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  };

  return (
    <section className="relative py-32 px-6 sm:px-12 lg:px-24 text-white bg-transparent max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-indigo-400">{texts[lang].title}</h2>

      <div className="flex justify-center gap-8 sm:gap-12">
        <Link
          href="https://github.com/thomasGiotti"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-white/10 border border-indigo-500 group-hover:bg-indigo-600 transition-all duration-300 shadow-xl">
            <FaGithub className="text-3xl sm:text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="mt-4 text-lg text-gray-300 group-hover:text-white transition">{texts[lang].github}</span>
        </Link>

        <Link
          href="https://linkedin.com/in/thomasgiotti"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-white/10 border border-indigo-500 group-hover:bg-indigo-600 transition-all duration-300 shadow-xl">
            <FaLinkedin className="text-3xl sm:text-4xl text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="mt-4 text-lg text-gray-300 group-hover:text-white transition">{texts[lang].linkedin}</span>
        </Link>
      </div>
    </section>
  );
}