import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
// componets
import Heading from './Heading'
// Style
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'
// Animation
import { motion, AnimatePresence } from 'framer-motion'
// data
import data from './dataCertificate'
import DetailCetrificate from './DetailCetrificate'



const SliderLicens = () => {
    const [allCertif] = useState(data)
    const [oneCert, setOneCert] = useState(null)
    const [openLightBox, setOpenLightBox] = useState(false)

    //console.table(allCertif);
    const handleDragStart = (e) => e.preventDefault();
 
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1028: { items: 3 }
    }

    const showDetail = (e) => {
      const handleId = e.target.id
      const item = allCertif.find(one => handleId === one.id)
      setOneCert(item)
      setOpenLightBox(true)
    }

    const itemss = allCertif.map(item => (
        <img 
            src={item.image} 
            alt={item.alt} 
            id={item.id} 
            onDragStart={handleDragStart}
            onClick={showDetail}
        />
    ))
    

    return (
        <StyleCertificate>
            <AnimatePresence>
                {openLightBox && (
                    <DetailCetrificate toggleShowDetail={setOpenLightBox} oneCert={oneCert}/>
                )}
            </AnimatePresence>

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
                    disableButtonsControls
                />
            </Slider>
        </StyleCertificate>
    )
}
const StyleCertificate = styled(motion.aside)`
    padding: 2em 0 4em;
`

const Slider = styled.div`
    width: 70%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 4em;
    @media (max-width: 600px) {
        margin-top: 2em;
    }

    img {
        width: 60%;
        height: auto;
        cursor: pointer;
    }
`

export default SliderLicens
