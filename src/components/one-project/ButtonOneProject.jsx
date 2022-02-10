import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { moveTextRight2 } from '../../animations';

const ButtonOneProject = ({href, text}) => {
  return    <ButonStyle 
                variants={moveTextRight2}
                whileHover={{
                    scale: 1.03,
                    textShadow: "0px 0px 4px #f8f8f8",
                    boxShadow: "0px 0px 10px rgb(0, 125, 255)"
                }}
                className="button-pro">
                <a href={href} target="_blank" rel="noreferrer">{text}</a>
            </ButonStyle>;
};

const ButonStyle = styled(motion.div)`
    margin: 0 0.5em;
`

export default ButtonOneProject;
