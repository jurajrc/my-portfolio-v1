import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Nav from './Nav'
// Style
import styled from 'styled-components'
import airplane from '../image/airplane1-s.png'
// Animetion
import { motion } from 'framer-motion'
// Redux
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {
    // Redux State
    const isOpenNav = useSelector(state => state.isOpenNav)
    const dispatch = useDispatch()

    return (
        <StyleHeader>
            <Flex >
                <Link to="/about" className="logo">
                    <motion.img whileHover={{ rotate: -90 }} src={airplane} alt="lietdielko" />
                </Link>
                <h3>Juraj Kubičár</h3>
            </Flex>

            <Burger onClick={() => dispatch({ type: 'toggleOpenNav' })}>
                <Line1 className={isOpenNav ? "l1" : ""}/>
                <Line2 className={isOpenNav ? "l2" : ""}/>
                <Line3 className={isOpenNav ? "l3" : ""}/>
            </Burger>
            
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
    z-index: 2;

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

// burger
const Burger = styled.div`
    width: 1.4em;
    height: 1.2em;
    position: absolute;
    top: 1.5em;
    right: 1.8em;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 800px) {
        display: block;
        z-index: 40;
    }
    @media (max-width: 500px) {
        top: 1.3em;
    }
    .l1 {
    transform: rotate(45deg) translate(26%, 250%);
    }
    .l2 {
        transform: translateY(-50%) translateX(100%);
        opacity: 0;
    }
    .l3 {
        transform: rotate(-45deg)translate(26%, -250%);
    }
`
const Line = styled(motion.div)`
    width: 1.4em;
    height: 0.15em;
    background: white;
    position: absolute;
    transition: 500ms all ease;
    
`
const Line1 = styled(Line)`
    top: 0;
    transform: rotate(0deg) translate(0%, 0%);
    
`
const Line2 = styled(Line)`
    top: 50%;
    transform: translateY(-50%);
`
const Line3 = styled(Line)`
    bottom: 0;
    transform: rotate(0deg) translate(0%, 0%);
`

export default Header
