"use client";
import React from 'react'
import { HiMiniCalendarDays } from 'react-icons/hi2';

type Step = {
    title: string;
    venue: string;
    year: number | string;
    text: string;
}

interface QualificationProps {
    step: Step;
    index: number;
    stepLength: number;
}

function QualificationSteps({ step, index, stepLength } : QualificationProps) {
    const { title, venue, year, text} = step;

    return (
        <div className="qualification__data">
            <div className="step-odd">
                {((index + 1) % 2 != 0) && (
                    // checking if the index is an odd number
                    <>
                        <p className='step-title'>{title}</p>
                        <p className="step-venue">{venue}</p>
                        <p className="step-year"><HiMiniCalendarDays className='icon' />{year}</p>
                        <p className="step-text">{text}</p>
                    </>
                )}
            </div>

            <div className="step-center">
                <div className="step-rounded"></div>
                {(index < stepLength - 1) && (
                    // checking if this element is not the lass element
                    <div className="step-line"></div>
                )}
            </div>

            <div className="step-even">
                {((index + 1) % 2 == 0) && (
                    // checking if the index is an odd number
                    <>
                        <p className='step-title'>{title}</p>
                        <p className="step-venue">{venue}</p>
                        <p className="step-year"><HiMiniCalendarDays className='icon' />{year}</p>
                        <p className="step-text">{text}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default QualificationSteps