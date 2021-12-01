import React from 'react'
// Style
import styled from 'styled-components'
// Anime
import { motion } from 'framer-motion'
import OneSkill from './OneSkill'
import Package from './Package'


const Skills = () => {
    return (
        <StyleSkills>
            <div className="nadpis">
                <h3>Technológie ktoré používam a neustále sa v nich zlepšujem</h3>

            </div>
            <OneSkill technologi="HTML" strong="80" />
            <OneSkill technologi="CSS / SASS" strong="80" />
            <OneSkill technologi="JavaScript ES6" strong="40" />
            <OneSkill technologi="ReactJS" strong="30" />
            <OneSkill technologi="PHP" strong="25" />
            <OneSkill technologi="Figma" strong="25" />
            <div className="nadpis">
            <h3>React a moje opľúbené npm knižnice</h3>
            </div>
            <Wrap>
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
    .nadpis {
        display: flex;
        h3 {
            padding: 6em 0 1em 0;
            border-bottom: 2px solid #3e3e3e;
            position: relative;
            
        }
        h3:after {
            content: "";
            position: absolute;
            bottom: -2px;
            //left: 90%;
            width: 10%;
            border-bottom: 2px solid #0080ff;
            animation: move 8s infinite ease-in-out;
        }

        @keyframes move {
            0%   { left: 0%;  }
            50%  { left: 90%; }
            100% { left: 0%;  }
        }
    }
    
`
const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 2rem 0;
`

export default Skills
