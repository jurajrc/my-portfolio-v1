import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
// style
import styled from 'styled-components'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
// animation
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <StyleFooter>
            <div className="footer-left">
                <ul>
                    <li> 
                        <a href="https://github.com/jurajrc" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faGithub} />Github
                        </a>
                    </li>
                    <li> 
                        <a href="https://www.linkedin.com/in/juraj-kubi%C4%8D%C3%A1r-150390228/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} />Linkedin
                        </a>
                    </li>
                    <li> 
                        <a href="https://www.instagram.com/jurajkubicar/" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} />Instagram
                        </a>
                    </li>
                    <li> 
                        <a href="https://jurajrc.sk" target="_blank" rel="noreferrer" title="Prerába sa na modernú React-app">
                            <FontAwesomeIcon icon={faPlane} />JurajRC
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-right">
                <p>
                    © 2021 All rights reserved. Juraj Kubičár
                </p>
            </div>
            
        </StyleFooter>
    )
}

const StyleFooter = styled(motion.footer)`
    max-width: 100%;
    padding: 1% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #3e3e3e;
    color: #8e8d8f;
    font-size: 0.81em;
    margin-bottom: 2em;
    @media (max-width: 750px) {
        flex-direction: column;
    }
    

    .footer-left {
        a { 
            color: #8e8d8f;
            transition: .3s all ease;
        }
        ul {
            display: flex;
            @media (max-width: 750px) {
                flex-wrap: wrap;
                justify-content: center;
                margin-bottom: 1em;
            }

            li {
                margin-right: 2em;
                @media (max-width: 750px) {
                    margin: 1em 1em 0 1em;
                }
                svg {
                    margin-right: .4em;
                    transition: .3s all ease;
                }
                &:hover svg {
                    color: #0080ff;
                }
                &:hover a {
                    color: #fff;
                }
            }
        }
    }
`

export default Footer
