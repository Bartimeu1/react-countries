import React from 'react';
import styled from 'styled-components';

import { Container } from './Container';
import SearchBar from './SearchBar';
import CustomSelect from './CustomSelect';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Controls() {
  return (
    <>
      <Container>
        <Wrapper>
          <SearchBar></SearchBar>
          <CustomSelect></CustomSelect>
        </Wrapper>
      </Container>
    </>
  )
}
