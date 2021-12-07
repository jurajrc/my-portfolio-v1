import React, { useState } from 'react'
import { motion } from 'framer-motion'
// image
import up from '../image/up-100px.svg'
import down from '../image/down-100px.svg'

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <div className="flex-betwen">
                <motion.h4 layout >{title}</motion.h4>
                <img src={toggle ? up : down} alt="arrow" />
            </div>
            
            { toggle ? children : "" }
            <div className="fag-line"></div>
        </motion.div>
    )
}

export default Toggle
