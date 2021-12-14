import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
// componets
import Heading from './Heading'
// Style
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
// data
import data from './dataCertificate'


const SliderLicens = () => {
    const [allCertif] = useState(data)

    //console.table(allCertif);
    const handleDragStart = (e) => e.preventDefault();
 
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1028: { items: 3 }
    }

    const itemss = allCertif.map(item => (
        <img src={item.image} alt={item.alt} id={item.id} onDragStart={handleDragStart}/>
    ))
    

    return (
        <StyleCertificate>
            <Heading heading="Cetifikaty a školenia" />
            <Slider>
                <AliceCarousel 
                    mouseTracking 
                    items={itemss} 
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={5000}
                    infinite
                    controlsStrategy='alternate'
                    animationType='fadeout'
                />
            </Slider>
        </StyleCertificate>
    )
}
const StyleCertificate = styled(motion.aside)`
    padding-top: 2em;
`

const Slider = styled.div`
    width: 70%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 4em;

    img {
        width: 60%;
        height: auto;
    }
`

export default SliderLicens
