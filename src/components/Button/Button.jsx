import React from 'react';
import { Button, PrimaryButton, SecondaryButton, DisabledButton } from './Button.styled';

const ButtonComponent = () => {
  return (
    <div>
      <Button>Button</Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <DisabledButton disabled>Disabled Button</DisabledButton>
    </div>
  );
};

export default ButtonComponent;
