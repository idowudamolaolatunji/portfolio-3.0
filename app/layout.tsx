import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Idowu Damola Olatunji | Software Engineer",
	description: "Hi 👋🏿, I'm Idowu. I build mordern and unique user interfaces with scalable and dynamic backend applications.",
	icons: {
		icon: {
		  url: "/favicon.png",
		  type: "image/png",
		}
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
}
