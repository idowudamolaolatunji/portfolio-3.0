"use client"
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { GoHome, GoHomeFill, GoInfo } from 'react-icons/go'
import { MdInfo, MdOutlineWebhook } from 'react-icons/md'
import { RiArchiveStackFill } from 'react-icons/ri'
import { RxStack } from 'react-icons/rx'
import { SiAboutdotme } from 'react-icons/si'


function MobileMenu() {
    return (
        <menu className='menu-box'>
            <a href="#" className='menu-card'>
                <GoHomeFill className="icon" />
                <span className="nav--item">Home</span>
            </a>

            <a href="#about" className='menu-card'>
                <MdInfo className="icon" />
                <span className="nav--item">About</span>
            </a>

            <a href="#skills" className='menu-card'>
                <MdOutlineWebhook className="icon" />
                <span className="nav--item">Skills</span>
            </a>

            <a href="#portfolio" className='menu-card'>
                <RiArchiveStackFill className="icon" />
                <span className="nav--item">Portfolio</span>
            </a>
        </menu>
    )
}

export default MobileMenu
