"use client";
import React, { useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md';
import { EducationHistory, WorkHistory } from '../utils/history';
import QualificationSteps from './QualificationSteps';

function Qualifications() {
    const [activeTab, setActiveTab] = useState('education');

  return (
    <div>
        <div className="section__title-box">
            <h3 className="section__title">Qualification</h3>
            <p className="section__subtitle">Why you should hire me</p>
        </div>

        <div className="qualification--container">
            <div className="tabs">
                <div className={`tab ${activeTab == 'education' ? 'active--tab' : ''}`} onClick={() => setActiveTab('education')}>
                    <FaGraduationCap className='icon' />
                    <p>Education</p>
                </div>
                <div className={`tab ${activeTab == 'work' ? 'active--tab' : ''}`} onClick={() => setActiveTab('work')}>
                    <MdOutlineWork className='icon' />
                    <p>Work</p>
                </div>
            </div>


            {activeTab == 'education' && (
                <div className="qualification__steps">
                    {EducationHistory.map((step, i, arr) => (
                        <QualificationSteps key={i} step={step} index={i} stepLength={arr.length} />
                    ))}
                </div>
            )}

            {activeTab == 'work' && (
                <div className="qualification__steps">
                    {WorkHistory.map((step, i, arr) => (
                        <QualificationSteps key={i} step={step} index={i} stepLength={arr.length} />
                    ))}
                </div>
            )}
                

        </div>
    </div>
  )
}

export default Qualifications