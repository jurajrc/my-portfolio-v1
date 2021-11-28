import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faAirbnb } from '@fortawesome/free-brands-svg-icons'
// style
import styled from 'styled-components'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

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
                        <a href="https://github.com/jurajrc" target="_blank" rel="noreferrer" >
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

const StyleFooter = styled.footer`
    max-width: 100%;
    padding: 1% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #3e3e3e;
    color: #8e8d8f;
    font-size: 0.81em;

    .footer-left {
        a { 
            color: #8e8d8f;
            transition: .3s all ease;
        }
        ul {
            display: flex;

            li {
                margin-right: 2em;
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
