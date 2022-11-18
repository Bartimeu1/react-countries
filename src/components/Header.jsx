import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';

const HeaderEl = styled.header`
  padding: 2rem 0;
  margin-bottom: 3rem;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-elem);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled(Link).attrs({
  to: '/',
})`
  font-weight: var(--fw-bold);
  font-size: var(--fs-md);
  color: var(--colors-text);
`;
const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
const ModeText = styled.p`
  margin-left: 7px;
  color: var(--colors-text);
`;


export default function Header() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toogleTheme = () => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ModeSwitcher onClick={() => toogleTheme()}>
            {currentTheme === 'light' ? <IoMoonOutline/> : <IoMoon/>}
            <ModeText>
              {currentTheme === 'light' ? 'Light mode' : 'Dark mode'}
            </ModeText>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
