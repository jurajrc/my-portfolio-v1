import React from 'react'
import styled from 'styled-components'

const FactBlock = ({icon, heading}) => {
    return (
        <StyleBlock>
            <h2>{heading}</h2>
            <p>{icon}</p>
        </StyleBlock>
    )
}
const StyleBlock = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #3e3e3e;
    padding-top: 7em;
    @media (max-width: 1300px) {
        padding-top: 6em;
    }
    @media (max-width: 900px) {
        padding-top: 5em;
    }
    //padding-top: 2em;
    h2 {
        font-size: 2.187em;
        padding: 3% 0;
        color: #f8f8f8;
        @media (max-width: 500px) {
            font-size: 1.5em;
        }
    }
    p {
        font-size: smaller;
        color: #8e8d8f;
        margin: 1% 3% 0 0;
    }
`

export default FactBlock
