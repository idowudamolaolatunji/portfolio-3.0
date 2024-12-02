"use client"
import React from 'react'
import { BsTools } from 'react-icons/bs'
import { GoHomeFill } from 'react-icons/go'
import { HiMiniUserCircle } from 'react-icons/hi2'
import { RiArchiveStackFill } from 'react-icons/ri'


function MobileMenu() {
    return (
        <menu className='menu-box'>
            <a href="#" className='menu-card'>
                <GoHomeFill className="icon" />
                <span className="nav--item">Home</span>
            </a>

            <a href="#about" className='menu-card'>
                <HiMiniUserCircle className="icon" />
                <span className="nav--item">About</span>
            </a>

            <a href="#skills" className='menu-card'>
                <BsTools className="icon" />
                <span className="nav--item">Skills</span>
            </a>

            <a href="#projects" className='menu-card'>
                <RiArchiveStackFill className="icon" />
                <span className="nav--item">Projects</span>
            </a>
        </menu>
    )
}

export default MobileMenu

