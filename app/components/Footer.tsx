"use client";
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container footer--container">
                <div className="footer--main">
                    <div className="footer--logo-box">
                        <a href="#">
                            <span className="logo">Idowu</span>
                        </a>
                    </div>

                    <TypeAnimation
                        className='footer--title'
                        sequence={[
                            "I'm a Full-stack Developer.",
                            1500,
                            "I'm a Creative Designer.",
                            1500,
                            "I'm a Mobile Developer.",
                            1500,
                            "I'm a Backend Developer.",
                            1500,
                            "I'm a Coding Instructor.",
                            1500,
                            "I'm a Frontend Developer.",
                            1500,
                            "I'm a Web3 Designer.",
                            1500,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </div>

                <div className="footer--urls">
                    <ul className='footer--list'>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="footer__socials">
                        <a target='_blank' href='https://www.linkedin.com/in/idowudamolaolatunji'><AiFillLinkedin className='icon' /></a>
                        <a target='_blank' href='https://github.com/idowudamolaolatunji'><AiFillGithub className="icon" /></a>
                        <a target='_blank' href='https://twitter.com/idowudamola_O'><AiOutlineTwitter className='icon' /></a>
                    </div>

                    <p className="copyright">&copy; Idowu Damola Olatunji. All right reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer