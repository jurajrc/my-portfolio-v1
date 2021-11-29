import React from 'react'
import styled from 'styled-components'
import logo from '../image/logo.svg'

const Package = ({npm}) => {
    return (
        <StylePackage>
            <div className="icon">
                <img src={logo} alt="logo" />
                <h3>{npm}</h3>
            </div>
        </StylePackage>
    )
}
const StylePackage = styled.div`
    flex-basis: 15rem;
    margin: 4rem 1rem;
    @media (max-width: 800px) {
        flex-basis: 10rem;
        margin: 2rem 0rem;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
            width: 9em;
            height: auto;
            
        }
        h3 {
            width: 100%;
            color: #f8f8f8;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1rem;
        }
    }
`

export default Package
