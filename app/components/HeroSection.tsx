"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import SkillsBox from './SkillsBox';
import { IoSend } from 'react-icons/io5';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import my_img from "../assets/images/pngs/myself.png";


function HeroSection() {
    return (
        <section className='hero__section section'>
            <div className="container">

                <div className="hero__container">
                    <div className="hero__text-box">
                        <h2 className='hero__title'>
                            Hi, I'm Idowu.
                        </h2>
                        <p className='hero__subtitle'>I am a{" "}
                            <TypeAnimation
                                className='hero--extras'
                                sequence={[
                                    'Full-stack Developer.',
                                    1500,
                                    'Creative Designer.',
                                    1500,
                                    'Mobile Developer.',
                                    1500,
                                    'Backend Developer.',
                                    1500,
                                    'Coding Instructor.',
                                    1500,
                                    'Frontend Developer.',
                                    1500,
                                    'Web3 Designer.',
                                    1500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>

                        <p className='hero__text'>I build mordern and unique user interfaces with scalable and dynamic backend applications.</p>
                        <p className='hero__text'>Do you Want to take your team & project to the next level?</p>

                        <a href="#contact" className='hero__btn'>Hire Me <IoSend className="icon" /></a>
                    </div>

                    <div className="hero__img--option">
                        <div className="hero__image-box">
                            <Image src={my_img} alt="image of idowu" className='hero__image' />
                        </div>
                        
                        <div className="hero__socials">
                            <a target='_blank' href='https://www.linkedin.com/in/idowudamolaolatunji'><AiFillLinkedin className='icon' /></a>
                            <a target='_blank' href='https://github.com/idowudamolaolatunji'><AiFillGithub className="icon" /></a>
                            <a target='_blank' href='https://twitter.com/idowudamola_O'><AiOutlineTwitter className='icon' /></a>
                        </div>
                    </div>
                </div>


                <SkillsBox />
            </div>
        </section>
    )
}

export default HeroSection