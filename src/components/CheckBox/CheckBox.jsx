
  import React, { useState } from 'react';
  import styles from './CheckBox.module.scss';
  
  
  
  const CheckBox = ({  ...props }) => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      // Handle click events or other interactions here
      setCount(count + 1);
    };
  
    return (
      <div className={styles.CheckBox} {...props}>
        
        
        
        
        
        
      </div>
    );
  };
  