  import React, { useState } from 'react';
  import { ButtonWrapper } from './Button.styled';

  const Button = ({ ...props }) => {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
      // Handle click events or other interactions here
      setCount(count + 1);
    };

    const handleDisable = () => {
      setIsDisabled(!isDisabled);
    };

    return (
      <ButtonWrapper
        className={styles.Button}
        onClick={handleClick}
        disabled={isDisabled}
        {...props}
      >
        {isDisabled ? 'Disabled' : 'Click Me'}
        <span>Count: {count}</span>
        <button onClick={handleDisable}>
          {isDisabled ? 'Enable' : 'Disable'}
        </button>
      </ButtonWrapper>
    );
  };

  export default Button;
