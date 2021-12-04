import React, { useState } from 'react'
// Components
import FactBlock from '../components/FactBlock'
import ScrollTop from '../components/ScrollTop'
// Style
import styled from 'styled-components'
// animate
import { motion } from 'framer-motion'
import { pageAnimation, popup } from '../animations'
// Data
import data from '../components/data'

const MyPortfolio = () => {
    // State
    const [allData, setAllData] = useState(data)
    return (
        <motion.article 
            exit="exit"
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"  
        > 
            <FactBlock icon="1 rok skúsenosti" heading="Portfólio" />
            <StyleProjects>
                {
                    allData.map(item => (
                        <StyleOneProject  key={item.id} >
                            <a href={item.http} target="_blank">
                                <img src={item.image} alt={item.id} />
                            </a>
                        </StyleOneProject>
                    ))
                }
            </StyleProjects>
            <ScrollTop />
        </motion.article>
    )
}
const StyleProjects = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 0;
    @media (max-width: 500px) {
        margin: 1em 0;
    }
`
const StyleOneProject = styled(motion.div)`
    width: 37em;
    height: 20.25em;
    overflow: hidden;
    border-radius: 1em;
    margin: 1em;
    transition: 500ms all ease;
    border: 1px solid #000;
    @media (max-width: 600px) {
        height: 19.25em;
    }
    @media (max-width: 500px) {
        height: 16em;
    }
    @media (max-width: 400px) {
        height: 11em;
        border-radius: 0.5em;
        margin: 0.5em 1em;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 500ms all ease-in-out;
        filter: brightness(80%);
    }
    &:hover img {
        transform: scale(1.03);
        filter: brightness(100%);
    }
    &:hover {
        box-shadow: 0 0 10px #8e8d8f;
    }
`

export default MyPortfolio
