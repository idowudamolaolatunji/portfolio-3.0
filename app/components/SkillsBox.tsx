"use client";
import React from 'react';
import js from '../assets/images/svgs/js-black.svg';
import react from '../assets/images/svgs/react.svg';
import ts from '../assets/images/svgs/ts-black.svg';
import express from '../assets/images/svgs/express.svg';
import next from '../assets/images/svgs/nextjs-black.svg';
import nodejs from '../assets/images/svgs/node-black.svg';
import figma from '../assets/images/svgs/figma.svg';
import mongodb from '../assets/images/svgs/mongodb-black.svg';
import mongoose from '../assets/images/svgs/mongoose.svg';
import git from '../assets/images/svgs/git.svg';
import sass from '../assets/images/svgs/sass.svg';
import tailwind from '../assets/images/svgs/tailwind.svg';
import npm from '../assets/images/svgs/npm-black.svg';
import Image from 'next/image';

function SkillsBox() {
  return (
    <div className='skill--box'>
        <Image src={js} alt='' />
        <Image src={figma} alt='' />
        <Image src={nodejs} alt='' />
        <Image src={next} alt='' />
        <Image src={mongoose} alt='' />
        <Image src={express} alt='' />
        <Image src={react} alt='' />
        <Image src={sass} alt='' />
        <Image src={ts} alt='' />
        <Image src={mongodb} alt='' />
        <Image src={git} alt='' />
        <Image src={react} alt='' />
        <Image src={tailwind} alt='' />
        <Image src={npm} alt='' />
    </div>
  )
}

export default SkillsBox