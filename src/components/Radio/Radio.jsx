import React from 'react';
import { RadioWrapper, RadioInput, RadioLabel, RadioIndicator } from './Radio.styled';

const Radio = ({ label, checked, onChange }) => {
  return (
    <RadioWrapper>
      <RadioInput type="radio" checked={checked} onChange={onChange} />
      <RadioLabel>{label}</RadioLabel>
      <RadioIndicator />
    </RadioWrapper>
  );
};

export default Radio;