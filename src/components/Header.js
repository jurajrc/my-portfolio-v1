import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Nav from './Nav'
// Style
import styled from 'styled-components'
import airplane from '../image/airplane1-s.png'
// Animetion
import { motion } from 'framer-motion'


const Header = () => {
    return (
        <StyleHeader>
            <Flex >
                <Link to="/" className="logo">
                    <motion.img whileHover={{ rotate: -90 }} src={airplane} alt="lietdielko" />
                </Link>
                <h3>Juraj Kubičár</h3>
            </Flex>
            <Nav />
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    max-width: 100%;
    //height: 5em;
    padding: 1.8% 0;
    background: #242124;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 4%;
    border-bottom: 1px solid #3e3e3e;

    .logo {
        width: 2.5em;
        height: 2.5em;
        background: #0080ff;
        border-radius: 50%;
        margin-right: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 80%;
            height: 80%;
        }
    }
`
const Flex = styled(motion.div)`
    display: flex;
    align-items: center;
`

export default Header
