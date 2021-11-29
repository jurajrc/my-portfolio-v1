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
    h2 {
        font-size: 2.187em;
        padding: 3% 0;
        color: #f8f8f8;
    }
    p {
        font-size: smaller;
        color: #8e8d8f;
        margin: 1% 3% 0 0;
    }
`

export default FactBlock
