import React, {useState, useEffect} from 'react'
import FactBlock from '../components/FactBlock'
import { Link } from 'react-router-dom'

// Style
import styled from 'styled-components'
// Animation 
import { motion } from 'framer-motion'
import { moveTextRight2, pageAnimation } from '../animations'
import Heading from '../components/Heading'
import ButtonOneProject from '../components/one-project/ButtonOneProject'
import Package from '../components/Package'

const OneProject = ({allData, path}) => { 
    const [oneData, setOneData] = useState(null)
    
    useEffect(() => {
        // podla path najdeme správny objekt v poly dát
        const currentData = allData.filter((oneData) => oneData.url === path)
        setOneData(currentData)
    }, [allData, path])


    return (
        <motion.article
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {oneData && (
                <>
                    <FactBlock heading={oneData[0].name} icon="super skúsenosť" />

                    <ButtonsStyle>
                        <ButonStyle 
                        variants={moveTextRight2}
                        whileHover={{
                            scale: 1.03,
                            textShadow: "0px 0px 4px #f8f8f8",
                            boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                        }}
                        className="button-pro">
                        <Link className='link-button' to="/portfolio" >Späť</Link>
                        </ButonStyle>

                        {oneData[0].github !== "" ? 
                            <ButtonOneProject href={oneData[0].github} text="GitHub" />
                        : <></> }

                        <ButtonOneProject href={oneData[0].http} text="Demo" />

                    </ButtonsStyle>

                    {oneData[0].description !== "" ? (
                        <>
                            <Heading heading="Popis projektu" />
                            <DesripStyle>
                                <p>{oneData[0].description}</p>
                            </DesripStyle>
                        </>
                    ): <></>}

                    {oneData[0].package.length !== 0 ? (
                        <>
                            <Heading heading="Použité technológie" />
                            <DesripStyle>
                                <div className="package">
                                    {oneData[0].package.map((one, index) => <Package key={index} npm={one} />)}
                                </div>
                            </DesripStyle>
                        </>
                    ) : <></>}

                    {oneData[0].technologies.length !== 0 ? (
                        <>
                            <Heading heading="Použité technológie" />
                            <DesripStyle>
                                <div className="package">
                                    {oneData[0].technologies.map((one, index) => 
                                    <img src={one} alt={index} key={index} width="80px"/>
                                    )}
                                </div>
                            </DesripStyle>
                        </>
                    ) : <></>}

                    <ImageStyle>
                        <img src={oneData[0].image} alt={oneData[0].name} />
                    </ImageStyle>
                </>
            )
                
            }
        </motion.article>
    )
}

const ButtonsStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1em 0;
`
const ButonStyle = styled(motion.div)`
    margin: 0 0.5em;
`
const DesripStyle = styled.div`
    padding: 2em;
    border: 2px solid #3e3e3e;
    
    .package {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        font-size: 80%;
        img {
            transition: 300ms all ease-in;
            &:hover {
                transform: scale(1.3);
            } 
        }
    }
    @media (max-width: 800px) {
        img {
            width: 60px;
        }
    }
    @media (max-width: 500px) {
        padding: 0 2em;
        p {
            font-size: 80%;
            padding: 2em 0;
        }
        img {
            width: 40px;
            padding: 1em 0;
        }

    }
`
const ImageStyle = styled.div`
    width: 100%;
    margin: 2em 0;
    display: flex;
    justify-content: center;
    img {
        width: 50%;
        height: auto;
        
        @media (max-width: 500px) {
            width: 100%;
        }
    }
`

export default OneProject
