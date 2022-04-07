import React, { useEffect } from 'react';
import styled from 'styled-components';

const FilterButtons = ({
    allData,
    activeButton,
    setActiveButton,
    setFiltered
}) => {

    useEffect(() => {
      if(activeButton === 'all') {
          setFiltered(allData)
          return;
      };
      const filtered = allData.filter((item) => item.use_tech === activeButton)
      setFiltered(filtered)
    }, [activeButton])

  return (
      <ButtonContainer className="button-container">
            <StyleButton
                className={activeButton === 'all' ? "active" : ""}
                onClick={() => setActiveButton("all")}
            >All
            </StyleButton>

            <StyleButton 
                className={activeButton === 'React-js' ? "active" : ""}
                onClick={() => setActiveButton("React-js")}
            >
              React-js
            </StyleButton>

            <StyleButton 
                className={activeButton === 'React-ts' ? "active" : ""}
                onClick={() => setActiveButton("React-ts")}
            >
              React-ts
            </StyleButton>

            <StyleButton
                className={activeButton === 'php' ? "active" : ""}
                onClick={() => setActiveButton("php")}
            >
              PHP
            </StyleButton>
      </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  .active {
    color: white;
  }
`

const StyleButton = styled.button`
  font-size: 1em;
  cursor: pointer;
  border: none;
  background: transparent; 
  color: #8e8d8f;
  padding: 0.5em;
  transition: 0.25s all ease;
  &:hover {
    color: white;
  }
`

export default FilterButtons;
