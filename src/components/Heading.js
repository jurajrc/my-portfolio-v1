import React from 'react'
import styled from 'styled-components'

const Heading = ({ heading }) => {
    return (
        <StyleHeading>
            <h3>{heading}</h3>
        </StyleHeading>
    )
}
const StyleHeading = styled.div`
    
        display: flex;
        h3 {
            padding: 2em 0 1em 0;
            margin-bottom: 1em;
            border-bottom: 2px solid #3e3e3e;
            position: relative;
            
        }
        h3:after {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 10%;
            border-bottom: 2px solid #0080ff;
            animation: move 8s infinite ease-in-out;
        }

        @keyframes move {
            0%   { left: 0%;  }
            50%  { left: 90%; }
            100% { left: 0%;  }
        }
    
`

export default Heading
