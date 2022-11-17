import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Label = styled.label`
  background-color: var(--colors-ui-elem);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--bradius);
  box-shadow: var(--shadow);
  width: 280px;
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  background-color: var(--colors-ui-elem);
  color: var(--colors-text);
  outline: none;
`; 

export default function SearchBar({inputValue, setInputValue}) {
  return (
    <Label>
      <IoSearch/>
      <Input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
    </Label>
  )
}
