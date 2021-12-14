import React from 'react'
// Component
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import FagSection from '../components/FagSection'
import ScrollTop from '../components/ScrollTop'
// Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'
import SliderLicens from '../components/SliderLicens'

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
            <FagSection />
            <SliderLicens />
            <ScrollTop />
        </motion.article> 
    )
}



export default AboutMy
