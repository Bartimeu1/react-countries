import React from 'react';
import styled from 'styled-components';

import { Container } from './Container';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default function List({filteredCountries}) {
  return (
    <div>
      <Container>
        <Wrapper>
          {filteredCountries.map((item) => (
            <Card 
              key={item.name}
              name={item.name}
              population={item.population}
              capital={item.capital}
              img={item.flags.png}
              region={item.region}
            ></Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  )
}
