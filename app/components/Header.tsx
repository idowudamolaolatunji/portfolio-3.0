"use client";
import React, { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { useWindowScroll } from 'react-use'

function Header() {
    const { y } = useWindowScroll();
    const [hasScrolledPass100, setHasScrolledPass100] = useState(false);

    useEffect(function () {
        if (y >= 100) setHasScrolledPass100(true);
        else setHasScrolledPass100(false)
    }, [y]);


    return (
        <>
            <header className='header main--desktop' style={hasScrolledPass100 ? {
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.1)"
            } : {}}>
                <div className="header--container">
                    <div className="logo--box">
                        <a href="#">
                            <span className="logo">Idowu</span>
                        </a>
                    </div>

                    <div className="nav__bar">
                        <ul className="nav--lists">
                            <li className="nav--item"><a href="#">Home</a></li>
                            <li className="nav--item"><a href="#about">About</a></li>
                            <li className="nav--item"><a href="#skills">Skills</a></li>
                            <li className="nav--item"><a href="#portfolio">Portfolio</a></li>
                        </ul>

                        <div className="nav--others">
                            <a href="#contact" className=''>Contact Me <IoSend className="icon" /></a>
                        </div>
                    </div>
                </div>

            </header>

            <header className='header main--mobile' style={hasScrolledPass100 ? {
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0, 0, 0, 0.1)"
            } : {}}>
                <div className="header--container">
                    <div className="logo--box">
                        <span className="logo">Idowu</span>
                    </div>

                    <div className="nav--others">
                        {hasScrolledPass100 && (
                            <a href="#contact" ><IoSend className="icon" style={{ fontSize: "1.8rem" }} /></a>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header