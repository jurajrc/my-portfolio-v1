import React from 'react'
import { Link } from 'react-router-dom'
import myPhoto from '../image/my-photo-2.JPG'
import plane from '../image/airplane1-s.png'
// style
import styled from 'styled-components'
// animation
import { motion } from 'framer-motion'

const Intro = () => {
    return (
        <StyleIntro>
            <div className="intro-left">
                <div className="border">
                    <div className="img">
                        <motion.img whileHover={{scale: 1.1}} transition={{ type: "spring", stiffness: 100 }} src={myPhoto} alt="Juraj" />
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <span>Frontend-vývojár</span>
                <h1>Juraj Kubičár</h1>
                <p>Vitajte na webe môjho osobného portfólia. Volám sa Juraj Kubičár a som junior fontend vývojár. Dávam si za úlohu vytvárať kreatívna weby a aplikácie s peknýmy detajlami. Dizajn obohacujem o vlastné návrhy, ktoré sú precízne vyrobené na základe vášho želania.</p>
                <motion.div 
                    whileHover={{
                        scale: 1.03,
                        textShadow: "0px 0px 4px #f8f8f8",
                        boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                    }}
                    className="button button-intro">
                    <Link to="/constact" >Kontakt</Link>
                </motion.div>
            </div>
        </StyleIntro>
    )
}
const StyleIntro = styled.div`
    display: flex;
    margin: 10% auto 0;
    width: 80%;
    .intro-left {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-left: 5%;
        .border {
            width: 28em;
            height: 28em;
            background: #444345;
            border-radius: 50%;
            align-items: center;
            box-shadow: -1px -1px 59px 9px rgb(0 0 0 / 75%);
            display: flex;
            justify-content: center;
        }
        .img {
            width: 25em;
            height: 25em;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 25em;
                filter: grayscale(100%);
                cursor: grab;
            }
        }
    }
    .intro-right {
        margin-left: 5%;
        span {
            color: #8e8d8f;
        }
        h1 {
            color: #f8f8f8;
            margin-top: 0.5em;
            font-size: 2.81em;
        }
        p {
            color: #adadad;
            margin-top: 1.5%;
            width: 80%;
            line-height: 1.7;
        }
        .button-intro {
            margin-top: 5%;
        }
    }
`

export default Intro
