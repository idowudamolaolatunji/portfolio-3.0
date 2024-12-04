"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWindowScroll, useWindowSize } from "react-use";
import ArrowToTop from "./components/ArrowToTop";

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});
  
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
	const [showArrowToTop, setShowArrowToTop] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

	const { y } = useWindowScroll();
	const { width } = useWindowSize();

	useEffect(function () {
        if (y >= 600) {
			setShowArrowToTop(true);
		} else {
			setShowArrowToTop(false);
		}

		if (y >= 250) {
			setShowMobileMenu(true);
		} else {
			setShowMobileMenu(false);
		}
    }, [y]);


	return (
		<>
			{width >= 600 && <AnimatedCursor color="185, 101, 115" outerAlpha={0.5} innerSize={5} innerScale={0.8} outerScale={6.8} showSystemCursor={true} />}

			<Header />
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectSection />
			<ContactSection />
			<Footer />

            {(width <= 650 && showMobileMenu) && <MobileMenu />}
			{showArrowToTop && <ArrowToTop />}
		</>
	);
}
