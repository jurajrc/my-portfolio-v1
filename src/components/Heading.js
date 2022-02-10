import React from 'react'
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { moveTextRight2 } from '../animations'

function randomIntFromInterval(min, max) { // min and max included 
    return (Math.random() * (max - min + 1) + min).toFixed(1)
}

const Heading = ({ heading }) => {
    return (
        <StyleHeading variants={moveTextRight2}>
            <h3>{heading}</h3>
        </StyleHeading>
    )
}
const StyleHeading = styled(motion.div)`
    
        display: flex;
        @media (max-width: 600px) {
            justify-content: center;
            padding-bottom: 2em;
        }
        h3 {
            padding: 6em 0 1em 0;
            margin-bottom: 1em;
            border-bottom: 2px solid #3e3e3e;
            position: relative;
            @media (max-width: 1100px) {
                text-align: center;
            }
            @media (max-width: 600px) {
                padding: 2em 0 1em;
                margin: 0 auto;
            }
            
        }
        h3:after {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 10%;
            border-bottom: 2px solid #0080ff;
            animation: move ${randomIntFromInterval(7, 8)}s infinite ease-in-out;
            
        }

        @keyframes move {
            0%   { left: 0%;  }
            50%  { left: 90%; }
            100% { left: 0%;  }
        }
        @media (max-width: 500px) {
            font-size: 75%;
        }
    
`

export default Heading
