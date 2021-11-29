import React from 'react'
import styled from 'styled-components'

const OneSkill = ({ technologi, strong }) => {
    return (
        
        <StyleOneSkill>
            <div className="bar-top">
                <h5>{technologi}</h5>
                <p>{strong}%</p>
            </div>
            <div className="bar-bottom">
                <div className="bar"
                    style={{width: strong + "%"}}
                ></div>
            </div>

        </StyleOneSkill>
    )
}

const StyleOneSkill = styled.div`
    margin: 2% 15% 0;

    .bar-top {
        display: flex;
        justify-content: space-between;
        p {
        color: #8e8d8f;
        }
    }
    .bar-bottom {
        width: 100%;
        height: 10px;
        background: transparent;
        border: 1px solid #8e8d8f;
        border-radius: 10px;
        margin-top: 1%;

        .bar {
            background: #0080ff;
            height: 100%;
            border: 1px solid rgb(36, 22, 26);
            border-radius: 10px;
        }
    }
    
`

export default OneSkill
