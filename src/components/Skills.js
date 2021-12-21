import React from 'react'
import OneSkill from './OneSkill'
import Package from './Package'
// Style
import styled from 'styled-components'
// Anime
import { motion } from 'framer-motion'
import { UseScroll } from './useScroll'
import { scrollReveal } from '../animations'
import Heading from './Heading'


const Skills = () => {

    const [element, controls] = UseScroll(.2)

    return (
        <StyleSkills>
            
            <Heading heading="Technológie ktoré používam a neustále sa v nich zlepšujem" />

            <OneSkill technologi="HTML" strong="80" />
            <OneSkill technologi="CSS / SASS" strong="80" />
            <OneSkill technologi="JavaScript ES6" strong="40" />
            <OneSkill technologi="ReactJS" strong="30" />
            <OneSkill technologi="PHP" strong="25" />
            <OneSkill technologi="Figma" strong="25" />
            
            <Heading heading="React a moje obľúbené npm knižnice" />
            <Wrap 
                variants={scrollReveal}  
                initial="hidden"
                animate={controls}
                ref={element}
            >
                <Package npm="Router" />
                <Package npm="Redux" />
                <Package npm="Styled component" />
                <Package npm="Framer motion" />
                <Package npm="Axios" />
                <Package npm="emailjs-com" />
            </Wrap>
        </StyleSkills>
    )
}
const StyleSkills = styled.div`

    width: 100%;
    margin: 3em 0;
    @media (max-width: 1100px) {
        margin: 1em 0;
    }
`
const Wrap = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem 0;
`

export default Skills
