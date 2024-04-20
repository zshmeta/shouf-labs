import React from 'react';
import { InputWrapper, Label, InputField } from './Input.styled';



const Input = ({ label, ...rest }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputField {...rest} />
    </InputWrapper>
  );
};

export default Input;