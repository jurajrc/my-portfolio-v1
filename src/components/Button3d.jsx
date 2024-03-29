import React from 'react'
import styled from 'styled-components'

const Button3d = () => {
  return (
    <StyleButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>Button</span>
    </StyleButton>
  )
}
const StyleButton = styled.button`
    transform: rotate(-25deg) skew(25deg);
    transform-style: preserve-3d;
    position: relative;
    width: 100px;
    height: 32px;
    border: none;
    background: transparent;

    ::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: -5px;
        width: 100%;
        height: 10px;
        background: #36a6bf;
        transform: skewX(-41deg);
    }
    ::after {
        content: "";
        position: absolute;
        top: 5px;
        left: -9px;
        width: 9px;
        height: 100%;
        background: #36a6bf;
        transform: skewY(-49deg);
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #36a6bf;
        color: #fff;
        font-size: 25px;
        transition: 1.1s ease-out;
    }
    &:hover span {
        z-index: 100;
        transition: 0.3s;
        color: black;
    }
    &:hover span:nth-child(5) {
        transform: translate(40px, -40px);
        opacity: 1;
    }
    &:hover span:nth-child(4) {
        transform: translate(30px, -30px);
        opacity: 0.8;
    }
    &:hover span:nth-child(3) {
        transform: translate(20px, -20px);
        opacity: 0.6;
    }
    &:hover span:nth-child(2) {
        transform: translate(10px, -10px);
        opacity: .4;
    }
    &:hover span:nth-child(1) {
        transform: translate(0px, 0px);
        opacity: .2;
    }
    &:nth-child(1):hover span {
        background: #8035f0;
    }
`

export default Button3d
