// ComponentTree.jsx
import React from 'react';
import { useFetch } from '../../utils/useFetch'; 
import { useCurrentComponent } from '../../utils/useContext'
import { ComponentTreeRoot, StyledList } from './ComponentTree.styled.js';

const ComponentTree = () => {
  const { loading, error, data: components } = useFetch('http://100.100.13.119:13001/api/componentsList');

    const { activeComponent, handleComponentClick } = useCurrentComponent();


  if (loading) {
    return <ComponentTreeRoot><p>Loading...</p></ComponentTreeRoot>;
  }
  if (error) {
    return <ComponentTreeRoot><p>Error: {error.message}</p></ComponentTreeRoot>;
  }
 
  return (
    <ComponentTreeRoot>
      <p>Shouf</p>
      <StyledList>
          {components.map((component) => (
        <li key={component.name} 
            onClick={() => handleComponentClick(component.name, component.path)}
            style={{ 
              backgroundColor: activeComponent === component.name ? 'lightblue' : 'transparent',
              cursor: 'pointer'
            }}>
          {component.name}
        </li>
      ))}
      </StyledList>
    </ComponentTreeRoot>
  );
};

export default ComponentTree;
