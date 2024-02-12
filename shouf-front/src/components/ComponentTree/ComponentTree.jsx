import React, { useState, useEffect } from 'react';
import { ComponentTreeRoot } from './ComponentTree.styled.js';

const ComponentTree = () => {
  const [components, setComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 
    fetch('http://localhost:13001/api/componentsList')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setComponents(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false); 
      });
  }, []);

  return (
    <ComponentTreeRoot>
      <h1>Components</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {components.map((componentName, index) => (
            // Use index as key because we only have names, no unique IDs
            <li key={index}>{componentName}</li>
          ))}
        </ul>
      )}
    </ComponentTreeRoot>
  );
};

export default ComponentTree;
