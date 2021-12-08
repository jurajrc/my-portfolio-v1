import React from 'react'
// Style
import styled from 'styled-components'
import { motion } from 'framer-motion'
// TEST
import { UseScroll } from './useScroll'

const OneSkill = ({ technologi, strong }) => {

    const [element, controls] = UseScroll(1)

    const lineAnim = {
        hidden: {
            width: "0%",
        },
        show: {
            width: strong + '%',
            transition: {
                duration: 1.5,
            }
        }
    }

    return (
        
        <StyleOneSkill >
            <div className="bar-top">
                <h5>{technologi}</h5>
                <p>{strong}%</p>
            </div>
            <motion.div className="bar-bottom" >
                <motion.div className="bar"
                    variants={lineAnim}
                    animate={controls}
                    initial="hidden"
                    ref={element}
                ></motion.div>
                
            </motion.div>

        </StyleOneSkill>
    )
}

const StyleOneSkill = styled(motion.div)`
    margin: 2% 15% 0;
    @media (max-width: 500px) {
        margin: 2% 5% 0;
    }

    .bar-top {
        display: flex;
        justify-content: space-between;
        p {
        color: #8e8d8f;
        }
    }
    .bar-bottom {
        width: 100%;
        height: 10px;
        background: transparent;
        border: 1px solid #8e8d8f;
        border-radius: 10px;
        margin-top: 1%;
        overflow: hidden;
        position: relative;

        .bar {
            background: #0080ff;
            height: 100%;
            border: 1px solid rgb(36, 22, 26);
            border-radius: 10px;
        }
    }
    
`

export default OneSkill
