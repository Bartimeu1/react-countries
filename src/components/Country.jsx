import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Flag = styled.img``;
const Info = styled.div``;
const InfoTitle = styled.h2``;

export default function Country(props) {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,

  } = props;
  return (
    <div>Country</div>
  )
}
