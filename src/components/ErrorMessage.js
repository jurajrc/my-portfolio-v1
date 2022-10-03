import React from 'react'
import fail from '../image/fail-200px.svg'
// Style 
import { StyleSend, CenterSend } from '../styles'
// Animation
import { motion } from 'framer-motion'
import { fadeIn, moveTextRight } from '../animations'

const ErrorMessage = ({ toggleError }) => {
    return (
        <StyleSend variants={fadeIn} initial="hidden" animate="show" exit="exit" >
            <CenterSend variants={moveTextRight} >
                <img src={fail} alt="error" />
                <p>Nepodarilo sa Odoslať</p>
                <motion.button whileHover={{
                    textShadow: "0px 0px 4px #f8f8f8",
                    boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                }} className="button" onClick={() => toggleError(false)} >Späť</motion.button>
            </CenterSend>
        </StyleSend>
    )
}

export default ErrorMessage