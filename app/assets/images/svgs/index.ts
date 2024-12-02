import css from './css.svg'
import javascript from './js.svg'
import react from './react.svg'
import node from './node.svg'
import next from './nextjs.svg'
import express from './express.svg'
import figma from './figma.svg'
import canva from './canva.svg'
import html from './html.svg'
import mongodb from './mongodb.svg'
import mongoose from './mongoose.svg'
import postman from './postman.svg'
import reactnative from './reactnative.svg'
import typescript from './ts.svg'
import tailwind from './tailwind.svg';
import scss from './sass.svg';

interface ImageStr {
    css: string;
    scss: string;
    javascript: string; 
    react: string; 
    node: string; 
    next: string; 
    express: string; 
    figma: string; 
    canva: string; 
    html: string; 
    mongodb: string; 
    mongoose: string; 
    postman: string; 
    reactnative: string; 
    typescript: string; 
    tailwind: string; 
}

const svgs: ImageStr = {
    css,
    scss,
    javascript, 
    react, 
    node, 
    next, 
    express, 
    figma, 
    canva, 
    html, 
    mongodb, 
    mongoose, 
    postman, 
    reactnative, 
    typescript, 
    tailwind, 
}

export default svgs;