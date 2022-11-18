import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 0 0 24%;
`;
const CardEl = styled.div`
  width: 85%;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-elem);
  border-radius: var(--bradius);
  cursor: pointer;
  overflow: hidden;
  margin: 0 auto 3.5rem auto;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
const CardInfo = styled.div`
  padding: 1rem 1.5rem 2rem;
`;
const CardTitle = styled.h2`
  font-size: var(--fs-md); 
  font-weight: var(--fw-bold);
`;
const CardList = styled.ul`
  padding: 1rem 0 0;
`;
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  & span {
    font-weight: var(--fw-bold);
  }
`;

export default function Card(props) {
  const navigate = useNavigate();
  const { name, population, capital, img, region } = props;
  return (
    <Wrapper onClick={() => navigate(`/country/${name}`)}>
      <CardEl>
        <CardImg src={img}></CardImg>
        <CardInfo>
          <CardTitle>{name}</CardTitle>
          <CardList>
            <CardListItem>
              <span>Population:</span> {population}
            </CardListItem>
            <CardListItem>
              <span>Region:</span> {region}
            </CardListItem>
            <CardListItem>
              <span>Capital:</span> {capital}
            </CardListItem>
          </CardList>
        </CardInfo>
      </CardEl>
    </Wrapper>
  )
}
