// Import necessary React and utility functions
import React, { useState }from 'react';
import { useFetch } from '../../utils/useFetch'; 
import { ComponentTreeRoot, StyledList } from './ComponentTree.styled.js';

const ComponentTree = () => {
  const { loading, error, data: components } = useFetch('http://100.100.13.76:13002/api/components');
  const [activeComponent, setActiveComponent] = useState(null);
  if (loading) {
    return <ComponentTreeRoot><p>Loading...</p></ComponentTreeRoot>;
  }
  if (error) {
    return <ComponentTreeRoot><p>Error: {error.message}</p></ComponentTreeRoot>;
  }

  return (
    <ComponentTreeRoot>
      <StyledList>
        {components.map((component, index) => {
          const otherFileName = component.otherFiles[0].name.split('.')[0];
          const isUnreadeable = component.jsx ? false : true;
          const jsxName = component.jsx ? component.jsx.name : otherFileName ? `${otherFileName} : jsx unreadeable` : "";
          const jsxPath = component.jsx ? component.jsx.path : undefined;

          

          return (
        <li key={index}  onClick={() => setActiveComponent(jsxName)} className={`${activeComponent === jsxName ? 'active' : ''} ${isUnreadeable ? 'unreadable' : ''}`}>
      <span>
      {jsxName}
      </span>
    </li>
          );
        })}
      </StyledList>
    </ComponentTreeRoot>
  );
}


export default ComponentTree;
