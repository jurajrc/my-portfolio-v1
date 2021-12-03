import React, { useState } from 'react'
import FactBlock from '../components/FactBlock'
import globus from '../image/global-digital-planet.svg'
import Heading from '../components/Heading'
// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
// Send Email
import emailjs from 'emailjs-com'
import SendMessage from '../components/SendMessage'

const Contact = () => {
    const [isSend, setIsSend] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y91bs9a', 'template_i3io50w', e.target, 'user_d9OyGgUFBHz4YCiT8oJlH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setIsSend(!isSend)
      };

    return (
        <article>
            
            {isSend && ( <SendMessage toggle={setIsSend}/> )}
            
            <FactBlock heading="Kontakt" icon="Napíšte mi" />
            <Content>
                <div className="left">
                    <img src={globus} alt="digital" />
                </div>
                <div className="right">
                    <Heading heading="Páčia sa Vám moje práce? Napíšte mi "/>
                    
                    <form onSubmit={sendEmail} >
                        <input type="text"   placeholder="Meno Priezvisko" name="name" />
                        <input type="email" placeholder="E-mail"          name="email" />
                        <input type="text"   placeholder="Predmet"         name="subject" />
                        <div className="area">
                            <textarea cols="30" rows="10" placeholder="Vaša správa" name="message"></textarea>
                        </div>
                        
                        <motion.input 
                            whileHover={{
                                textShadow: "0px 0px 4px #f8f8f8",
                                boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                            }}
                        type="submit" value="Odoslať správu" className="submit"/>
                        
                    </form>

                </div>
            </Content>
        </article>
    )
}

const Content = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    padding: 4em 0;
    @media (max-width: 500px) {
            padding: 1em 0;
        }

    .left {
        width: 35%;
        display: flex;
        justify-content: center;
        img {
            width: 100%;
            fill: #0080ff;
        }
        @media (max-width: 1000px) {
            display: none;
        }
        
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 5em;
        @media (max-width: 800px) {
            width: 100%;
        }
        @media (max-width: 500px) {
            padding-bottom: 1em;
        }
        
        input[type="text"],
        input[type="email"] {
            display: block;
            width: 30em;
            height: 3em;
            margin:   0.5em 0;
            border: 2px solid #8d8e8f;
            background: transparent;
            padding-left: 1em;
            color: #8d8e8f;
            outline: none;
            transition: 300ms all ease-in-out;
            
            &:focus {
                border-radius: 1em;
                border: 2px solid #0080ff;
            }
            @media (max-width: 500px) {
                width: 20em;
            }
        }
        textarea {
            width: 30em;
            border: 2px solid #8d8e8f;
            background: transparent;
            padding: 1em 0 0 1em;
            color: #8d8e8f;
            outline: none;
            transition: 300ms all ease-in-out;
            &:focus {
                border-radius: 1em;
                border: 2px solid #0080ff;
            }
            @media (max-width: 500px) {
                width: 20em;
                height: 10em;
            }
        }
        input[type="submit"] {
            padding: 0.5em 0.826em;
            background: rgb(51, 51, 51);
            color: #f8f8f8;
            text-align: center;
            border: 2px solid rgb(0, 128, 255);
            border-radius: 3.125em;
            width: 12em;
            margin-top: 1em;
            @media (max-width: 500px) {
                justify-content: center;
                display: flex;
                margin: 1em auto;
        }
        }
        
    }
`

export default Contact
