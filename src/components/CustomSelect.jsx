import React, { useState } from 'react';
import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';

import CustomOption from './CustomOption';

const SelectWrapper = styled.div`
  position: relative;
  width: 180px;
  box-shadow: var(--shadow);
  border-radius: var(--bradius);
`;

const SelectEl = styled.div`
  border: none;
  outline:none;
  background-color: var(--colors-ui-elem);
  color: var(--colors-text);
  height: 50px;
  padding: 0 15px;
  width: 100%;
  letter-spacing: 0.1px;
  display flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position absolute;
    height: 30px;
    width: 1px;
    background-color: var(--colors-text);
    right: 42px;
    top: 10px;
    opacity: 0.3;
  }
`;
const Options = styled.div`
  position: absolute;
  bottom: -180px;
  width: 100%;
`;

const optionItems = [
  {value: 'All', label: 'All'},
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'}
]

export default function CustomSelect({ selectValue ,setSelectValue }) {
  const [showOptions, setShowOptions] = useState(false);

  function handleSelectValue(value) {
    setSelectValue(value);
    setShowOptions(false);
  }

  return (
    <SelectWrapper>
      <SelectEl
        onClick={() => setShowOptions(prevState => !prevState)}
      >
        {selectValue}
        <IoChevronDown></IoChevronDown>
      </SelectEl>
      {showOptions === true ?
        <Options>
          {optionItems.map((item) => (
            <CustomOption
              key={item.label}
              label={item.label}
              value={item.value}
              onChoice={handleSelectValue}
            ></CustomOption>
          ))}
        </Options> : null
      }
    </SelectWrapper>
  )
}
