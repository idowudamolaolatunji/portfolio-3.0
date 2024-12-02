"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useWindowSize } from "react-use";


interface Tool {
	name: string;
	icon: string;
	range: number;
}

interface SkillProps {
	title: string;
	text: string;
	tools: Tool[];
	icon: JSX.Element;
}

function SkillFigure({ title, text, tools, icon }: SkillProps) {
	const { width } = useWindowSize();
	const [isShown, setIsShown] = useState(false);

	function handleClick() {
		setIsShown(!isShown);
	}

	useEffect(
		function () {
			if (width < 450) {
				setIsShown(true);
			} else {
				setIsShown(false);
			}
		},
		[width],
	);

	return (
		<figure className="skill__figure" key={title} onClick={handleClick} style={isShown ? { backgroundColor: "#2d2d2d" } : {}}>
			<div className="figure--container">
				<div className="figure__heading">
					{icon}
					<span>
						<h4 className="skill__title">{title}</h4>
						<p className="skill__text">{text}</p>
					</span>
				</div>

				<span onClick={handleClick} style={{ alignSelf: "flex-start", marginTop: "-0.5rem" }}>
					<IoIosArrowDown className="icon" style={isShown ? { transform: "rotate(180deg)" } : {}} />
				</span>
			</div>

			{isShown && (
				<div className="tools--box">
					{tools.map((tool) => (
						<div className="tool--item" key={tool?.name}>
							<span className="flex-al-cen" style={{ gap: ".4rem" }}>
								<p className="tool-text">{tool?.name}</p>
								<Image src={tool.icon} alt={tool.name} style={{ width: "2rem", height: "2rem" }} />
							</span>
							<span className="tool-range">
								<span style={{ width: `${tool.range}%` }}>&nbsp;</span>
							</span>
						</div>
					))}
				</div>
			)}
		</figure>
	);
}

export default SkillFigure;
