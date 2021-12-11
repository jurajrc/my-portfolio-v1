import React from 'react'
import up from '../image/up-100px.svg'
// style 
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { hideRight } from '../animations'

const ScrollTopButton = () => {

    

    const handleScrollTop = () => {
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })
    }
    return (
        <TopButton 
            variants={hideRight} 
            initial="hidden" 
            animate="show" 
            exit="exit"
            onClick={handleScrollTop}
            whileHover={{ 
                scale: 1.1, 
                textShadow: "0px 0px 4px #f8f8f8",
                boxShadow: "0px 0px 10px rgb(0, 125, 255)"   }} 
        >
            <motion.img 
                whileHover={{
                    opacity: 1
                }}
                src={up} alt="arrow-up" />
            
        </TopButton>
    )
}
const TopButton = styled(motion.div)`
    position: fixed;
    right: 2em;
    bottom: 3em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 2px solid #0080ff;
    //transition: 0.5s all ease;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
`

export default ScrollTopButton
