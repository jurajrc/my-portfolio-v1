import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import FactBlock from '../components/FactBlock'
import ScrollTop from '../components/ScrollTop'
import FilterButtons from '../components/FilterButtons'
// Style
import styled from 'styled-components'
// animate
import { motion, AnimatePresence } from 'framer-motion'
import { pageAnimationShou } from '../animations'
import Button3d from '../components/Button3d'


const MyPortfolio = ({allData}) => {
    const [filtered, setFiltered] = useState([])
    const [activeButton, setActiveButton] = useState("all")
    
    return (
        <motion.article 
            exit="exit"
            variants={pageAnimationShou} 
            initial="hidden" 
            animate="show"  
        > 
            <FactBlock icon="1,5 roka skúsenosti" heading="Portfólio" />

            <FilterButtons 
                allData={allData} 
                activeButton={activeButton} 
                setActiveButton={setActiveButton} 
                setFiltered={setFiltered}
            />

            <StyleProjects  >
                <AnimatePresence >
                {
                    filtered.map((item) => (
                        
                        <StyleOneProject  key={item.id} 
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.5}}
                        >
                            <Link to={item.url} >
                                <motion.img  src={item.image} alt={item.id}  />
                            </Link>
                        </StyleOneProject>
                    ))
                }
                </AnimatePresence>
            </StyleProjects>
            <StyleButton3d className='button-3d'>
                <Button3d />
            </StyleButton3d>
            <ScrollTop />
        </motion.article>
    )
}
const StyleProjects = styled(motion.section)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 2em 0;
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
        transition: 750ms all ease-in-out;
        filter: brightness(80%);
    }
    &:hover img {
        transform: scale(1.04) rotateZ(-1.5deg);
        filter: brightness(100%);
    }
    &:hover {
        box-shadow: 0 0 10px #8e8d8f;
    }
`
const StyleButton3d = styled.div`
    margin: 5em 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default MyPortfolio
