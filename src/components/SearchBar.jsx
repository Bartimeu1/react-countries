import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Label = styled.label``;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})``; 

export default function SearchBar() {
  return (
    <Label>
      <IoSearch/>
      <Input></Input>
    </Label>
  )
}
