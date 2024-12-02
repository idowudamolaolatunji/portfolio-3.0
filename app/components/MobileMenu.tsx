"use client"
import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { MdOutlineWebhook } from 'react-icons/md'
import { RiArchiveStackFill } from 'react-icons/ri'
import { TiUser } from 'react-icons/ti'


function MobileMenu() {
    return (
        <menu className='menu-box'>
            <a href="#" className='menu-card'>
                <GoHomeFill className="icon" />
                <span className="nav--item">Home</span>
            </a>

            <a href="#about" className='menu-card'>
                <TiUser className="icon" />
                <span className="nav--item">About</span>
            </a>

            <a href="#skills" className='menu-card'>
                <MdOutlineWebhook className="icon" />
                <span className="nav--item">Skills</span>
            </a>

            <a href="#project" className='menu-card'>
                <RiArchiveStackFill className="icon" />
                <span className="nav--item">Project</span>
            </a>
        </menu>
    )
}

export default MobileMenu

