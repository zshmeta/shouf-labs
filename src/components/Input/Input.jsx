import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isActivated, setIsActivated] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsValid(e.target.value !== '');
  };

  const handleActivate = () => {
    setIsActivated(true);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={!isActivated}
      />
      {!isValid && isActivated && <p>Please enter a valid value</p>}
      <button onClick={handleActivate}>Activate</button>
    </div>
  );
};

export default Input;
