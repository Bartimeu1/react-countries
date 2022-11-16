import React from 'react';
import styled from 'styled-components';

const OptionEl = styled.div`
  background-color: var(--colors-ui-elem);
  color: var(--color-text);
  height: 30px;
  padding-left: 15px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 0.1px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &::last-child {
    margin-bottom: 5px;
  }
`;

export default function CustomOption(props) {
  const {label, value, onChoice} = props;
  return (
    <OptionEl
      onClick={() => onChoice(value)}
    >
      {label}
    </OptionEl>
  )
}
