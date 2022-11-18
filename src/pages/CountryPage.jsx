import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IoArrowBack } from "react-icons/io5";
import { getCountryData } from '../config';
import { Container } from '../components/Container';
import Country from '../components/Country';

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const GoBack = styled(Link).attrs({
  to: '/',
})`
  width: 100px;
  border-radius: var(--bradius);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-elem);
  padding 0.5rem 1rem;
  & span {
    margin-left: 0.5rem;
    font-size: var(--fs-sm);
    color: var(--colors-text);
  }
  & svg {
    stroke: var(--colors-text);
  }
`;

export default function CountryPage({name}) {
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    axios.get(getCountryData(name))
    .then(response => setCountryInfo(response.data));
  }, []);

  return (
    <Wrapper>
      <Container>
        <GoBack>
          <IoArrowBack/>
          <span>Back</span>
        </GoBack>
        <Country countryInfo={countryInfo}/>
      </Container>
    </Wrapper>
  )
}
