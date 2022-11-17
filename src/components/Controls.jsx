import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Container } from './Container';
import SearchBar from './SearchBar';
import CustomSelect from './CustomSelect';

const Wrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Controls({HandleFilter}) {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('All');
  
  useEffect(() => {
    HandleFilter(inputValue, selectValue);
  }, [inputValue, selectValue]);

  return (
    <>
      <Container>
        <Wrapper>
          <SearchBar 
            inputValue={inputValue} 
            setInputValue={setInputValue}
          ></SearchBar>
          <CustomSelect
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          ></CustomSelect>
        </Wrapper>
      </Container>
    </>
  )
}
