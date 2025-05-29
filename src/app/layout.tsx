
import "./styles/globals.css";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import StarsBackground from "./components/StarsBackground";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
	title: "Thomas GIOTTI - Software Engineer, full-stack & Mobile developer",
	description: "Personal website and portfolio",
};


export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="dark font-main">
			<body className="bg-black text-white font-sans cursor-none">
				<StarsBackground />

				<div className="relative z-10">
					<CustomCursor />
					<NavBar />
					{children}
				</div>
			</body>
		</html>
	);
}
