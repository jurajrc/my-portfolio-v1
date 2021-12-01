import React from 'react'
import ok from '../image/ok-200px.svg'
// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { fadeIn, moveTextRight } from '../animations'


const SendMessage = ({ toggle }) => {
    return (
        <StyleSend variants={fadeIn} initial="hidden" animate="show" exit="exit" >
            <Center variants={moveTextRight} >
                <img src={ok} alt="chack" />
                <p>Správa bola odoslaná</p>
                <motion.button whileHover={{
                    textShadow: "0px 0px 4px #f8f8f8",
                    boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                }} className="button" onClick={() => toggle(false)} >OK</motion.button>
            </Center>
            
        </StyleSend>
    )
}
const StyleSend = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff6f;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    overflow: hidden;
`
const Center = styled(motion.div)`
    width: 20em;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(51, 51, 51);
    border-radius: 1em;
    p {
        margin-bottom: 2em;
    }
    @media (max-width: 500px) {
        width: 17em;
        height: 16em;
        img {
            width: 8em;
        }
    }
`

export default SendMessage
