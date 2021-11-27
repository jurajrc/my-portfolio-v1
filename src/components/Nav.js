import React from 'react'
import { Link, useLocation } from 'react-router-dom'

//styled
import styled from 'styled-components'
// animation
import { motion } from 'framer-motion'

const Nav = () => {

    const {pathname} = useLocation()

    return (
        <StyleNav>
            <ul>
                <li>
                    <Link to="/" >O mne</Link>
                    <Line
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/" ? "100%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="portfolio" >Portfólio</Link>
                    <Line 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/portfolio" ? "100%" : "0%"}}
                    />
                </li>
                <li>
                    <Link to="contact" >Kontakt</Link>
                    <Line 
                        transition={{duration: 0.75}}
                        initial={{width: "0%"}}
                        animate={{width: pathname === "/contact" ? "100%" : "0%"}}
                    />
                </li>
            </ul>
        </StyleNav>
    )
}

const StyleNav = styled(motion.nav)`
    ul {
        display: flex;
        li {
            padding-left: 4em;
            a {
                color: #8e8d8f;
                transition: .3s all ease-in;
                &:hover {
                    color: #f8f8f8;
                }
            }
        }
    }
`
const Line = styled(motion.div)`
    height: .1em;
    width: 100%;
    background: #0080ff;
`

export default Nav
