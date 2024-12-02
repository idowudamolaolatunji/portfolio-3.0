"use client";
import React from "react";
import Tecnnologies from "./Tecnnologies";
import Qualifications from "./Qualifications";

function SkillsSection() {
	return (
		<section className="section skills__section" id="skills">
			<div className="container">
				<div className="section__title-box">
					<h3 className="section__title">Skills</h3>
					<p className="section__subtitle">Technical Proficiency</p>
				</div>

				<Tecnnologies />
				<Qualifications />
			</div>
		</section>
	);
}

export default SkillsSection;
