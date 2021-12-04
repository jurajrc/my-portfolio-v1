import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
//styled
import styled from 'styled-components'
// animation
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn2, moveTextRight2 } from '../animations'


const Nav = () => {
    const isOpenNav = useSelector(state => state.isOpenNav)
    const dispatch = useDispatch()

    // state resize
    function useWindowSize() {
        const [size , setSize] = useState([window.innerHeight, window.innerWidth])
        useEffect(() => {
            const handleResize = () => {
                setSize([window.innerHeight, window.innerWidth])
            }
            window.addEventListener("resize", handleResize)
            return () => {
              window.removeEventListener("resize", handleResize)
            }
        })
        return size
    }
    const [height, width] = useWindowSize()

    useEffect(() => {
        if(width <= 800) {
            dispatch({ type: 'CLOSE' })
        } 
        if (width > 800) {
            dispatch({ type: 'OPEN' })
        }
        
        
    }, [width])


    const {pathname} = useLocation()

    const closeNav = () => {
        if(width <= 800) {
            dispatch({ type: 'toggleOpenNav' })
        }
        //console.log(isOpenNav);
    }

    return (
        <StyleNav >
            
            {isOpenNav && (
                <AnimatePresence>
                <motion.ul variants={fadeIn2} initial="hidden" animate="show" exit="exit">
                    <motion.li variants={width < 800 ? moveTextRight2 : ''} >
                        <Link onClick={closeNav} to="/" >O mne</Link>
                        <Line
                            transition={{duration: 0.75}}
                            initial={{width: "0%"}}
                            animate={{width: pathname === "/about" ? "100%" : "0%"}}
                        />
                    </motion.li>
                    <motion.li variants={width < 800 ? moveTextRight2 : ''}>
                        <Link onClick={closeNav} to="portfolio"  >Portfólio</Link>
                        <Line 
                            transition={{duration: 0.75}}
                            initial={{width: "0%"}}
                            animate={{width: pathname === "/portfolio" ? "100%" : "0%"}}
                        />
                    </motion.li>
                    <motion.li variants={width < 800 ? moveTextRight2 : ''}>
                        <Link onClick={closeNav} to="contact" >Kontakt</Link>
                        <Line 
                            transition={{duration: 0.75}}
                            initial={{width: "0%"}}
                            animate={{width: pathname === "/contact" ? "100%" : "0%"}}
                        />
                    </motion.li>
                </motion.ul>
                </AnimatePresence>
            )}
            
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
        @media (max-width: 800px) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-content: flex-start;
            background: rgba(36, 33, 36, 1);
            z-index: 0;
            li {
                padding: 2em 0;
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
