import React, { useState } from 'react'
import FactBlock from '../components/FactBlock'
// Style
import styled from 'styled-components'
// animate
import { motion } from 'framer-motion'
// data
import data from '../components/data'

const MyPortfolio = () => {
    // State
    const [allData, setAllData] = useState(data)
    console.log(allData);
    return (
        <article>
            <FactBlock icon="1 rok skusenosti" heading="Portfólio" />
            <StyleProjects>
                {
                    allData.map(item => (
                        <StyleOneProject>
                            <a href={item.http}>
                                <img src={item.image} alt={item.id} />
                            </a>
                        </StyleOneProject>
                    ))
                }
            </StyleProjects>
        </article>
    )
}
const StyleProjects = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 0;
`
const StyleOneProject = styled.div`
    width: 37em;
    height: 20.25em;
    overflow: hidden;
    border-radius: 1em;
    margin: 1em;
    transition: 1s all ease;
    border: 1px solid #000;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 1s all ease-in-out;
    }
    &:hover img {
        transform: scale(1.03);
    }
    &:hover {
        box-shadow: 0 0 10px #8e8d8f;
    }
`

export default MyPortfolio
