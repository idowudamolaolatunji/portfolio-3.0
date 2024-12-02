"use client";
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import { MdOutlineLocalPhone, MdOutlineLocationOn } from 'react-icons/md'
import ReactTextareaAutosize from 'react-textarea-autosize'

function ContactSection() {
    return (
        <section className='section contact__section' id='contact'>
            <div className="container">
                <div className="section__title-box">
                    <h3 className="section__title">Contact Me</h3>
                    <p className="section__subtitle">Get in touch</p>
                </div>

                <div className="contact--container">
                    <div className="contact__socials">
                        <span className="social--box">
                            <span className='social--icon-box'>
                                <MdOutlineLocalPhone className='icon' />
                            </span>
                            <a href='tel:+2349057643470' className='social--item'> 
                                <p>Call me</p>
                                <p>+2349057643470</p>
                            </a>
                        </span>
                        <span className="social--box">
                            <span className='social--icon-box'>
                                <AiOutlineMail className='icon' />
                            </span>
                            <a href='mailto:idowudamolaolatunji@gmail.com' className='social--item'> 
                                <p>Email</p>
                                <p>idowudamolaolatunji@gmail.com</p>
                            </a>
                        </span>
                        <span className="social--box">
                            <span className='social--icon-box'>
                                <MdOutlineLocationOn className='icon' />
                            </span>
                            <span className='social--item'> 
                                <p>Location</p>
                                <p>Lagos, Nigeria</p>
                            </span>
                        </span>
                    </div>


                    <form className="contact__form" method='post' action="https://formspree.io/f/xblrarev">
                        <div className="form--flex">
                            <div className="form--item">
                                <label htmlFor="name" className="form--label">Fullname</label>
                                <input className="form--input" type="text" id='name' name='name' required placeholder='Enter full name' />
                            </div>
                            <div className="form--item">
                                <label htmlFor="email" className="form--label">Email</label>
                                <input className="form--input" type="email" id='email' name='email' required placeholder='Enter email address' />
                            </div>
                        </div>
                        <div className="form--item">
                            <label htmlFor="title" className="form--label">Subject / Purpose</label>
                            <input className="form--input" type="text" name='subject' id='title' required placeholder='Enter a title or reason for contact' />
                        </div>

                        <div className="form--item">
                            <label htmlFor="message" className="form--label">Message</label>
                            <ReactTextareaAutosize id='message' name='message' className='form--textarea' defaultValue="" required placeholder='Enter your message' />
                        </div>

                        <button type='submit' className='form--btn'>Send Message <IoSend className='icon' /></button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection