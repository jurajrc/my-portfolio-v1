import React, { useState } from 'react'
// Component
import FactBlock from '../components/FactBlock'
import Heading from '../components/Heading'
import ScrollTop from '../components/ScrollTop'
// Image
import globus from '../image/global-digital-planet.svg'
// Style
import styled from 'styled-components'
// Animation
import { AnimatePresence, motion } from 'framer-motion'
import { pageAnimation } from '../animations'
// Send Email
import emailjs from 'emailjs-com'
import SendMessage from '../components/SendMessage'
import ErrorMessage from '../components/ErrorMessage'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Contact = () => {
    const [isSend, setIsSend] = useState(false)
    const [sendError, setSendError] = useState(false)
    
    function sendEmail() {
        emailjs.sendForm(
            'service_y91bs9a', 
            'template_i3io50w', 
            '#contact-form', 
            'user_d9OyGgUFBHz4YCiT8oJlH')
            .then(res=>{
                console.log(res);
                setIsSend(!isSend)
            }).catch(err=> {
                console.log(err)
                setSendError(!sendError)
            });
      };

    const validationSchema = yup.object({
        name: yup.string().required("Zabudol si na meno."),
        email: yup.string().email("Skús zadať správny email").required("Ani bez emailu to nepôjde =)."),
        message: yup.string().required("A správa je kde ?")
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit:(values => {
            console.log(JSON.stringify(values))
            sendEmail();
            formik.resetForm();
        }),
        validationSchema: validationSchema,

    });

    return (
        <motion.article 
            exit="exit"
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
        >
            <AnimatePresence>
                {isSend && ( <SendMessage toggle={setIsSend}/> )}
                {sendError && ( <ErrorMessage toggleError={setSendError}/> )}
            </AnimatePresence>
            
            <FactBlock heading="Kontakt" icon="Napíšte mi" />
            <Content>
                <div className="left">
                    <img src={globus} alt="digital" />
                </div>
                <div className="right">
                    <Heading  heading="Páčia sa Vám moje práce? Napíšte mi" />
                    
                    <form id="contact-form" onSubmit={formik.handleSubmit} >
                        <input 
                            id="name"
                            name="name" 
                            type="text"   
                            placeholder="Meno Priezvisko" 
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? 
                            <p className="error">{formik.errors.name}</p> : null}

                        <input 
                            id="email"
                            name="email" 
                            type="email" 
                            placeholder="E-mail"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        { formik.touched.email && formik.errors.email ? 
                            <p className="error" >{formik.errors.email}</p> : null }

                        
                        <textarea 
                            id="message" 
                            placeholder="Vaša správa" 
                            name="message"
                            value={formik.values.message}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        ></textarea>
                        { formik.touched.message && formik.errors.message ?
                            <p className="error">{formik.errors.message}</p> : null }
                        
                        
                        <motion.input 
                            whileHover={{
                                textShadow: "0px 0px 4px #f8f8f8",
                                boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                            }}
                        type="submit" value="Odoslať správu" className="submit"/>
                        
                    </form>

                </div>
            </Content>
            <ScrollTop />
        </motion.article>
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
        padding-left: 2em;
        @media (max-width: 1000px) {
            padding-left: 0;
        }
        @media (max-width: 800px) {
            width: 100%;
        }
        @media (max-width: 500px) {
            padding-bottom: 1em;
        }
        form {
            width: 26em;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            @media (max-width: 500px) {
                width: 20em;
                align-items: center;
            } 
            @media (max-width: 350px) {
                width: 18em;
            }
            .error {
                color: #f90000;
                font-size: 0.8rem;
                //margin-top: 0.5rem;
            }
        }
        
        input[type="text"],
        input[type="email"] {
            display: block;
            width: 100%;
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
            
        }
        textarea {
            width: 100%;
            height: 11em;
            border: 2px solid #8d8e8f;
            background: transparent;
            padding: 1em 0 0 1em;
            margin:   0.5em 0;
            color: #8d8e8f;
            outline: none;
            transition: 300ms all ease-in-out;
            &:focus {
                border-radius: 1em;
                border: 2px solid #0080ff;
            }
            @media (max-width: 500px) {
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
            cursor: pointer;
            @media (max-width: 500px) {
                justify-content: center;
                display: flex;
                margin: 1em auto;
        }
        }
        
    }
`

export default Contact
