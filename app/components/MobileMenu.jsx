"use client"
import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { GoHome, GoInfo } from 'react-icons/go'
import { RxStack } from 'react-icons/rx'

function MobileMenu() {
    return (
        <menu className='menu-box'>
            <a href="#" className='menu-card'>
                <GoHome className="icon" />
                <span className="nav--item">Home</span>
            </a>

            <a href="#about" className='menu-card'>
                <GoInfo className="icon" />
                <span className="nav--item">About</span>
            </a>

            <a href="#skills" className='menu-card'>
                <BsBriefcase className="icon" />
                <span className="nav--item">Skills</span>
            </a>

            <a href="#portfolio" className='menu-card'>
                <RxStack className="icon" />
                <span className="nav--item">Portfolio</span>
            </a>
        </menu>
    )
}

export default MobileMenu

