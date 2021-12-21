import React, { useRef } from 'react'
// style
import styled from 'styled-components'
// Animation
import gsap from 'gsap'

const ContactPersonal = () => {

    const svgMessages = useRef(null)
    const flap = useRef(null)
    const note = useRef(null)
    //const phone = useRef(null)
    const phone = useRef(null)
    const sound = useRef(null)

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
      gsap.fromTo(phone.current, {rotation: -5}, {rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)"})
      gsap.fromTo(sound.current, {opacity: 1, scale: 0.8}, {opacity: 0, scale: 1.3, duration: 1})
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
                        className='phone-svg'
                        width="48" 
                        height="48" 
                        viewBox="0 0 48 48" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="Phone">
                            <g id="sound" className='sound' ref={sound}>
                                <path 
                                    d="M24.5224 10.349C25.2866 9.58416 26.3781 9.75469 26.3781 9.75469C29.105 10.183 31.9544 11.5047 34.2252 13.7749C36.4955 16.0451 37.8176 18.8944 38.2453 21.6222C38.2453 21.6222 38.4152 22.7137 37.651 23.4778C36.8643 24.2645 35.5092 24.2983 34.6808 23.4699C34.1909 22.98 34.0865 22.2891 34.0865 22.2891C33.8339 20.9417 33.4062 18.9121 31.2471 16.753C29.0873 14.5939 27.0578 14.1662 25.7111 13.9136C25.7111 13.9136 25.0202 13.8092 24.5304 13.3193C23.7014 12.491 23.7357 11.1357 24.5224 10.349Z" 
                                    fill="#0080FF"
                                />
                                <path 
                                    d="M41.7133 23.4759C42.2627 19.8352 40.575 15.3424 36.6163 11.3836C32.6577 7.42498 28.165 5.73712 24.5242 6.28652C24.5242 6.28652 23.3714 6.47834 22.6184 5.72526C21.7709 4.87779 21.8191 3.53439 22.6124 2.74106C23.1228 2.23075 23.9518 2.12031 23.9518 2.12031C27.098 1.66677 33.4266 2.23794 39.5945 8.40545C45.7625 14.5729 46.3336 20.9022 45.8794 24.0484C45.8794 24.0484 45.7684 24.8781 45.2587 25.3878C44.4654 26.1805 43.1221 26.2294 42.2745 25.3818C41.5216 24.6288 41.7133 23.4759 41.7133 23.4759Z" 
                                    fill="#0080FF"
                                />
                            </g>
                            <path 
                                ref={phone}
                                className='phone'
                                d="M29.2979 34.995C27.4969 36.8184 22.9096 33.0421 18.9464 29.089C14.9826 25.1351 11.1911 20.5548 12.9911 18.7321C15.5698 16.1214 17.8175 14.5091 13.2099 8.79577C8.60444 3.0796 5.56461 7.49259 3.06639 10.0218C0.182248 12.941 2.96501 23.7665 13.664 34.4383C24.3637 45.1081 35.1583 47.8214 38.0403 44.9036C40.5377 42.3745 44.9078 39.2871 39.1858 34.6995C33.4637 30.1142 31.8765 32.385 29.2979 34.995Z" 
                                fill="#0080FF"
                            />
                        </g>
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

    .messages-svg, .phone-svg {
        overflow: visible;
    }

    .flap {
        transform-origin: 23px 0px;
        }

    .phone {
        transform-origin: center;
    }
    .sound {
        opacity: 0;
        transform-origin: left center;
    }
`

export default ContactPersonal
