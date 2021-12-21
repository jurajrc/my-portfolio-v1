import React, { useRef } from 'react'
// style
import styled from 'styled-components'
// Animation
import gsap from 'gsap'

const ContactPersonal = () => {

    const svgMessages = useRef(null)
    const flap = useRef(null)
    const note = useRef(null)
    const phone = useRef(null)

    const tl = gsap.timeline({
        defaults: {duration: 0.35, ease: "Power2.easeOut"}
    })

    // Anime svg Message
    const MessageMouseEnter = () => {
      tl.fromTo(svgMessages.current, { scale: 1 }, { scale: 0.9 })
      tl.fromTo(flap.current, {scale: 1}, {scale: -1}, '<50%')
      tl.fromTo(svgMessages.current, { scale: 0.9 }, { scale: 1 }, '<50%')
      tl.fromTo(note.current, {y: 0, opacity: 1}, {y: -40, opacity: 0, duration: 0.7})
      tl.to(flap.current, {scale: 1}, '<50%')
    }

    // Anime svg Phone
    const PhoneMouseEnter = () => {
      tl.fromTo(phone.current, {rotation: -5}, {rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)"})
    }

    return (
        <Personal>
            <PersonalOne 
                onMouseEnter={MessageMouseEnter} className="message-container">
                <svg
                    ref={svgMessages}
                    className="messages-svg"
                    width="49"
                    height="43"
                    viewBox="0 0 49 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect x="3" y="10" width="43" height="27" fill="#272727" />
                    <rect
                        className="note"
                        ref={note}
                        x="9"
                        y="28"
                        width="31"
                        height="9"
                        fill="#ffffff"
                    />
                    <path
                        d="M24.5 27.3893L3 9.96533V37.6251H46V9.96533L24.5 27.3893Z"
                        fill="#0080ff"
                    />
                    <path
                        d="M24.1846 26.388L24.5 26.6444L24.8154 26.388L46.033 9.13796L47.1252 8.25L45.7176 8.25L3.28238 8.25L1.87477 8.25L2.96696 9.13796L24.1846 26.388Z"
                        fill="#0080ff"
                        stroke="#242124"
                        className="flap"
                        ref={flap}
                    />
                </svg>
                <div className="message-text">
                    <a href="mailto:kjuraj83@gmail.com">kjuraj83@gmail.com</a>
                </div>
            </PersonalOne>
            <PersonalOne
                onMouseEnter={PhoneMouseEnter}
                 className="phone-container">
                <svg 
                    ref={phone}
                    width="48" 
                    height="48" 
                    viewBox="0 0 48 48" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path 
                    d="M17.407 14.8879C18.1189 14.176 18.5188 13.2104 18.5188 12.2037C18.5188 11.1969 18.1189 10.2314 17.407 9.51944L13.9993 6.11179C13.2874 5.39992 12.3219 5 11.3151 5C10.3083 5 9.34281 5.39992 8.63089 6.11179L8.63706 6.10561L6.89239 7.84981C-3.22369 17.9659 30.0339 51.2235 40.15 41.1074L41.8942 39.3632L41.888 39.3694C42.5999 38.6575 42.9998 37.6919 42.9998 36.6852C42.9998 35.6784 42.5999 34.7129 41.888 34.0009L38.4804 30.5933C37.7684 29.8814 36.8029 29.4815 35.7961 29.4815C34.7894 29.4815 33.8238 29.8814 33.1119 30.5933L31.7382 31.967C30.6334 33.0718 28.8759 33.1436 27.6679 32.1522C23.5017 28.7332 19.2666 24.4986 15.848 20.3323C14.8567 19.1244 14.9284 17.3669 16.0333 16.2621L17.407 14.8879V14.8879Z" 
                    fill="#0080FF"/>
                </svg>


                <div className="phone-text">
                    <a href="tel:+421918466552">+421 918 466 552</a>
                </div>
            </PersonalOne>
        </Personal>
    )
}
const Personal = styled.section`
    padding-top: 3em;

    @media (max-width: 500px) {
        font-size: 80%;
    }
`
const PersonalOne = styled.div`
    width: 26em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0.5em;
    svg {
        transform: scale(0.8);

        @media (max-width: 500px) {
        transform: scale(0.7);
        }
    }
    a {
        color: #8e8d8f;
        transition: 0.2s all ease;
    }
    
    @media (max-width: 500px) {
        width: 20em;
    }

    .message-text, .phone-text {
        padding-left: 1em;
    }

    &:hover a {
        color: white;
    }

    .messages-svg {
        overflow: visible;
    }

    .flap {
        transform-origin: 23px 0px;
    
`

export default ContactPersonal
