import React from 'react'
// Component
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import ScrollTop from '../components/ScrollTop'
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

const AboutMy = () => {
    return (
        <motion.article 
            exit="exit"
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
        >
            <Intro />
            <Skills />

            <ScrollTop />
        </motion.article> 
    )
}



export default AboutMy
