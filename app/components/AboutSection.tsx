"use client"
import React from 'react';
import CountUp from 'react-countup';
import about_img from '../assets/images/pngs/about-img.jpg'
import { MdOutlineFileDownload } from 'react-icons/md';
import { calcYears } from '../utils/helper';
import Image from 'next/image';

function AboutSection() {
  return (
    <section className='section about__section' id='about'>
        <div className="container about--container">
            <div className="section__title-box main--mobile">
                <h3 className="section__title">About</h3>
                <p className="section__subtitle">Get to know Idowu</p>
            </div>

            <div className="about__image-box">
                <Image src={about_img} alt="about image" className='about__image' />
            </div>


            <div className='about__text-box'>
                <div className="section__title-box main--desktop">
                    <h3 className="section__title">About</h3>
                    <p className="section__subtitle">Get to know Idowu</p>
                </div>
                <span className="about--text">
                    A Highly motivated and reliable full stack software developer with a strong educational foundation in Computer Science and {calcYears()}+ years of industry experience.

                    <ul className='about--lists'>
                        <li>Proficient in a range of web technologies, including frontend, backend and mobile development</li>
                        <li>Strong passion for continuous learning and self-improvement</li>
                        <li>Effective collaborator with excellent communication and interpersonal skills</li>
                        <li>Strong analytical and problem-solving skills, with attention to detail and commitment to excellence</li>
                    </ul>
                </span>

                <span className="about--info">
                    <span className='info-box'>
                        <p>0<CountUp end={calcYears()} enableScrollSpy duration={2.5} />+</p>
                        <p>years of experience</p>
                    </span>

                    <span className='info-box'>
                        <p><CountUp end={10} enableScrollSpy duration={2.5} />+</p>
                        <p>project done</p>
                    </span>

                    <span className='info-box'>
                        <p><CountUp end={99} enableScrollSpy duration={2.5} />%</p>
                        <p>completion rate</p>
                    </span>
                </span>

                <a href="../../idowu-olatunji-ca.pdf" target="_blank" className='btn--download' download>
                    Download CV
                    <MdOutlineFileDownload className='icon' />
                </a>
            </div>

        </div>
    </section>
  )
}

export default AboutSection