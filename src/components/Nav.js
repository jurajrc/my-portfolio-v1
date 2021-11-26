import React from 'react'
import { Link } from 'react-router-dom'

//styled
import styled from 'styled-components'
// animation
import { motion } from 'framer-motion'

const Nav = () => {
    return (
        <StyleNav>
            <ul>
                <li>
                    <Link to="/" >O mne</Link>
                </li>
                <li>
                    <Link to="portfolio" >Portfólio</Link>
                </li>
                <li>
                    <Link to="contact" >Kontakt</Link>
                </li>
            </ul>
        </StyleNav>
    )
}

const StyleNav = styled(motion.nav)`
    ul {
        display: flex;
    }
`

export default Nav
