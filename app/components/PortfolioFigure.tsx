"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { useWindowSize } from "react-use";

interface PortfolioProps {
	title: string;
	text: string;
	imageSrc: string | any;
	index: number;
	linkDemo: string;
	linkGithub: string[];
	fullStack?: boolean;
}

function PortfolioFigure({ title, text, imageSrc, index, linkDemo, linkGithub, fullStack }: PortfolioProps) {
	const { width } = useWindowSize();

	return (
		<figure className="portfolio__figure">
			{/* // checking if the index is an odd number or even number */}
			{index % 2 != 0 && width > 650 ? (
				<React.Fragment>
					<figcaption className="portfolio--text-box">
						<h4 className="portfolio--title">{title}</h4>
						<p className="portfolio--text">{text}</p>
						<div className="portfolio--btns">
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

					<div className="portfolio--img-box">
						<Image className="portfolio--img" src={imageSrc} alt={title} />
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="portfolio--img-box">
						<Image className="portfolio--img" src={imageSrc} alt={title} />
					</div>

					<figcaption className="portfolio--text-box">
						<h4 className="portfolio--title">{title}</h4>
						<p className="portfolio--text">{text}</p>
						<div className="portfolio--btns">
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

export default PortfolioFigure;
