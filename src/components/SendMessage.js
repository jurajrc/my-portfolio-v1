import React from 'react'
import ok from '../image/ok-200px.svg'
// Style
import { StyleSend, CenterSend } from '../styles'
// Animation
import { motion } from 'framer-motion'
import { fadeIn, moveTextRight } from '../animations'


const SendMessage = ({ toggle }) => {
    return (
        <StyleSend variants={fadeIn} initial="hidden" animate="show" exit="exit" >
            <CenterSend variants={moveTextRight} >
                <img src={ok} alt="ok" />
                <p>Správa bola odoslaná</p>
                <motion.button whileHover={{
                    textShadow: "0px 0px 4px #f8f8f8",
                    boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                }} className="button" onClick={() => toggle(false)} >Späť</motion.button>
            </CenterSend>
        </StyleSend>
    )
}

export default SendMessage