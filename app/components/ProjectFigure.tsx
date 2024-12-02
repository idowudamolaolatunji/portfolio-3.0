"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { useWindowSize } from "react-use";

interface ProjectProps {
	title: string;
	text: string;
	imageSrc?: string | any;
	index: number;
	linkDemo: string;
	linkGithub: string[];
	fullStack?: boolean;
}

function ProjectFigure({ title, text, imageSrc, index, linkDemo, linkGithub, fullStack }: ProjectProps) {
	const { width } = useWindowSize();

	return (
		<figure className="project__figure">
			{/* // checking if the index is an odd number or even number */}
			{index % 2 != 0 && width > 650 ? (
				<React.Fragment>
					<figcaption className="project--text-box">
						<h4 className="project--title">{title}</h4>
						<p className="project--text">{text}</p>
						<div className="project--btns">
                            <a className="demo" target="_blank" href={linkDemo}>
                                <FaRegEye className="icon" /> See Live
                            </a>

							{fullStack ? (
								<>
									<a className="code" target="_blank" href={linkGithub[0]}>
										<AiOutlineGithub className="icon" /> Frontend
									</a>
									<a className="code" target="_blank" href={linkGithub[1]}>
										Backend <AiOutlineGithub className="icon" />
									</a>
								</>
							) : (
								<a className="code" target="_blank" href={linkGithub[0]}>
									<AiOutlineGithub className="icon" /> See Code
								</a>
							)}
						</div>
					</figcaption>

					<div className="project--img-box">
						<Image className="project--img" src={imageSrc} alt={title} />
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="project--img-box">
						<Image className="project--img" src={imageSrc} alt={title} />
					</div>

					<figcaption className="project--text-box">
						<h4 className="project--title">{title}</h4>
						<p className="project--text">{text}</p>
						<div className="project--btns">
                            <a className="demo" target="_blank" href={linkDemo}>
                                <FaRegEye className="icon" /> See Live
                            </a>

							{fullStack ? (
								<>
									<a className="code" target="_blank" href={linkGithub[0]}>
										<AiOutlineGithub className="icon" /> Frontend
									</a>
									<a className="code" target="_blank" href={linkGithub[1]}>
										Backend <AiOutlineGithub className="icon" />
									</a>
								</>
							) : (
                                <a className="code" target="_blank" href={linkGithub[0]}>
									<AiOutlineGithub className="icon" /> See Code
								</a>
                            )}
						</div>
					</figcaption>
				</React.Fragment>
			)}
		</figure>
	);
}

export default ProjectFigure;
