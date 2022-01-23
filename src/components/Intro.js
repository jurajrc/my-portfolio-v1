import React from 'react'
import { Link } from 'react-router-dom'
// Image
import myPhoto from '../image/my-photo-3.webp'
import myPhoto_s from '../image/my-photo-3-s.webp'
// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { fade, moveTextRight2 } from '../animations'

const Intro = () => {
    return (
        <StyleIntro>
            <div className="intro-left">
                <motion.div variants={fade} className="border">
                    <div className="img">
                        <picture >
                            <source media="(max-width: 40em)" srcSet={myPhoto_s} />
                            <motion.img  whileHover={{scale: 1.1}} src={myPhoto} alt="Juraj" />
                        </picture>
                    </div>
                </motion.div>
            </div>
            <div className="intro-right">
                <Hide>
                    <motion.h3 variants={fade} >Frontend-vývojár</motion.h3>
                </Hide>
                
                    <motion.h1 variants={moveTextRight2} >Juraj Kubičár</motion.h1>
                
                <Hide>
                    <motion.p variants={fade} >Vitajte na webe môjho osobného portfólia. Volám sa Juraj Kubičár a som junior frontend vývojár. Dávam si za úlohu vytvárať kreatívne weby a aplikácie s peknými detailami. Dizajn obohacujem o vlastné návrhy, ktoré sú precízne vyrobené na základe vášho želania.</motion.p>
                </Hide>
                <motion.div 
                    variants={moveTextRight2}
                    whileHover={{
                        scale: 1.03,
                        textShadow: "0px 0px 4px #f8f8f8",
                        boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                    }}
                    className="button button-intro">
                    <Link to="/contact" >Kontakt</Link>
                </motion.div>
            </div>
        </StyleIntro>
    )
}
const StyleIntro = styled.section`
    display: flex;
    margin: 18% auto 0;
    width: 80%;
    @media (max-width: 1100px) {
        flex-direction: column;
        }
    @media (max-width: 900px) {
        margin-top: 8em;
        }
    .intro-left {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-left: 5%;
        @media (max-width: 1160px) {
            margin-left: 0;
            font-size: 90%;
        }
        @media (max-width: 400px) {
            font-size: 80%;
        }
        .border {
            width: 28em;
            height: 28em;
            background: #444345;
            border-radius: 50%;
            align-items: center;
            box-shadow: -1px -1px 59px 9px rgb(0 0 0 / 75%);
            display: flex;
            justify-content: center;
            @media (max-width: 650px) {
            width: 20em;
            height: 20em;
            }
        }
        .img {
            width: 25em;
            height: 25em;
            position: relative;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                filter: grayscale(100%);
                cursor: grab;
                
            }
            @media (max-width: 650px) {
            width: 17.5em;
            height: 17.5em;

            }
        }
    }
    .intro-right {
        margin-left: 5%;
        h3 {
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
        @media (max-width: 1100px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 2em 0 0 0;
            p {
                margin: 1.5% auto;
                font-size: 0.9em;
                width: 80%;
            }
            .button-intro {
                margin: 5% auto;
            }
        }
        @media (max-width: 650px) {
            h1 {
                font-size: 2em;
            }
            p {
                width: 100%;
            }
        }
    }
`
const Hide = styled.div`
    overflow: hidden;
`

export default Intro
