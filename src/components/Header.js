import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Nav from './Nav'
// Style
import styled from 'styled-components'
// Animetion


const Header = () => {
    return (
        <StyleHeader>
            <div>
                <div className="logo"></div>
                <h2>Juraj Kubičár</h2>
            </div>
            <Nav />
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    width: 100%;
    height: 5em;
    background: #242124;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
`

export default Header
