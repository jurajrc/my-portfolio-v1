import React from 'react'
import Toggle from './Toggle'
// Style
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { AnimateSharedLayout } from 'framer-motion'
import Heading from './Heading'

const FagSection = () => {
    return (
        <Fag>
            <Heading heading="Otázky a odpovede" />
            
            <AnimateSharedLayout>
                <Toggle title="Čo ma motivuje?">
                    <div className="answer">
                        <p>
                            Som poháňaný a motivovaný stať sa tak silným vývojárom, ako len môžem byť. Rád si udržiavam vysokú mieru učenia a vždy sa vystavujem novým rámcom, knižniciam a technológiám.
                        </p>
                        <p>
                            Momentálne pokračujem v rozvoji svojich React zručností, v budúcnosti by som chcel rozvíjať svoje back end zručnosti, keďže by som sa nakoniec chcel venovať kariére full stack developera.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Aké mám koníčky">
                    <div className="answer">
                        <p>Bicykel</p>
                        <p>Plávanie</p>
                        <p>V neposlednom rade <a href="http://www.jurajrc.sk/">RC modelárstvo</a> </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Fag>
    )
}

const Fag = styled(motion.section)`
    padding-bottom: 4em;
    .flex-betwen {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 0;
        cursor: pointer;
        img {
            width: 2em;
        }
    }
    .answer {
        p{
            color: #adadad;
            font-size: 0.9em;
            margin: 0.5em 0;
        }
    }
    .fag-line {
        width: 100%;
        height: 2px;
        background: #3e3e3e;
    }
`

export default FagSection
