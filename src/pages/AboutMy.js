import React from 'react'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

const AboutMy = () => {
    return (
        <motion.article variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <Intro />
            <Skills />
        </motion.article>
    )
}



export default AboutMy
