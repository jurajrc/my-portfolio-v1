import React from 'react'
// Style
import styled from 'styled-components'
import { StyleSend } from '../styles'
// Animate
import { motion } from 'framer-motion'
import { fadeIn, popup2 } from '../animations'
// Image
import close from '../image/close-50px.png'
import download from '../image/download-64px.png'


const DetailCetrificate = ({ toggleShowDetail, oneCert }) => {
    const {image, pdf, alt} = oneCert
    
    return (
        <StyleSend 
            variants={fadeIn} 
            initial="hidden" 
            animate="show" 
            exit="exit"
        >
            <Center variants={popup2} >
                <img src={image} alt={alt} />
            </Center>
            <Button 
                onClick={() => toggleShowDetail(false)} 
                whileHover={{ rotate: -90 }}>
                <img src={close} alt="close" />
            </Button>
            <ButtonDownload 
                whileHover={{ scale: 1.2 }}>
                <a href={pdf} target="_blank" rel='noreferrer'>
                    <img src={download} alt="download"/>
                </a>
            </ButtonDownload>
        </StyleSend>
    )
}

const Center = styled(motion.div)`
    width: auto;
    height: 90%;
    img {
        width: auto;
        height: 100%;
    }
    @media (max-width: 600px) {
        width: 95%;
        img {
            width: 100%;
            height: auto;
        }
    }
`
const Button = styled(motion.div)`
    position: absolute;
    top: 2em;
    right: 2em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    //border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 850px) {
        background: #ffffff5c;
        padding: 0.3em
    }
`
const ButtonDownload = styled(Button)`
    top: 7em;
`

export default DetailCetrificate
