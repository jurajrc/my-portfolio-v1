import React, {useState, useEffect} from 'react'
import FactBlock from '../components/FactBlock'
//import { useHistory } from 'react-router'

// Style
import styled from 'styled-components'
// Animation 
//import { motion } from 'framer-motion'

const OneProject = ({allData}) => { 
    const [oneData, setOneData] = useState(null)
    //const history = useHistory()
    //console.log(history);

    // useEffect(() => {
    //   const currentData = allData.filter((oneData) => oneData.url === url)
    //     setOneData(currentData)
    // }, [allData, url])
    return (
        <article>
            <FactBlock heading="Project Sudoku" icon="super skúsenosť" />
            
            
        </article>
    )
}

export default OneProject
