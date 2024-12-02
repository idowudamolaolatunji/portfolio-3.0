"use client";
import React from 'react'
import SkillFigure from './SkillFigure';
import { FaDrawPolygon } from 'react-icons/fa'
import { RiDatabaseLine } from 'react-icons/ri'
import { TbDeviceMobileCode } from 'react-icons/tb'
import { TiDeviceDesktop } from 'react-icons/ti'

import svgs from "../assets/images/svgs";

// svgs[`${tool.name}`]
function Tecnnologies() {
  return (
    <div className="skills--container">
        {/*  */}
        <SkillFigure 
            title="Frontend development"
            text="With 3+ years experience"
            tools={[ { name: 'css', range: 88, icon: svgs?.css }, { name: 'html', range: 83, icon: svgs?.html }, { name: 'javascript', range: 85, icon: svgs?.javascript }, { name: 'react', range: 78, icon: svgs?.react }, { name: 'next', range: 65, icon: svgs?.next }, { name: 'typescript', range: 60, icon: svgs?.typescript }, { name: 'tailwind', range: 70, icon: svgs?.tailwind }, { name: 'scss', range: 80, icon: svgs?.scss } ]}
            icon={<TiDeviceDesktop className='icon' />}
        />

        {/*  */}
        <SkillFigure
            title="Creative Design"
            text="With 2+ years experience"
            tools={[ { name: 'figma', range: 65, icon: svgs?.figma }, { name: 'canva', range: 60, icon: svgs?.canva } ]}
            icon={<FaDrawPolygon className="icon" />}
        />

        {/*  */}
        <SkillFigure
            title="Backend development"
            text="With 3+ years experience"
            tools={[ { name: 'node', range: 80, icon: svgs?.node }, { name: 'mongoose', range: 75, icon: svgs?.mongoose }, { name: 'express', range: 82, icon: svgs?.express }, { name: 'mongodb', range: 78, icon: svgs?.mongodb }, { name: 'postman', range: 75, icon: svgs?.postman } ]}
            icon={<RiDatabaseLine className='icon' />}
        />

        {/*  */}
        <SkillFigure
            title="Mobile development"
            text="With 1+ years experience"
            tools={[ { name: 'reactnative', range: 65, icon: svgs?.reactnative }]}
            icon={<TbDeviceMobileCode className='icon' />}
        />
    </div>
  )
}

export default Tecnnologies