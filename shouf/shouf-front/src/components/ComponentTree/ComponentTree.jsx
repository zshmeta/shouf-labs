// Import necessary React and utility functions
import React from 'react';
import { useFetch } from '../../utils/useFetch'; 
import { useCurrentComponent } from '../../utils/useContext'
import { ComponentTreeRoot, StyledList } from './ComponentTree.styled.js';

const ComponentTree = () => {
  const { loading, error, data: components } = useFetch('http://100.100.13.76:13002/api/components');
  const { activeComponent, handleComponentClick } = useCurrentComponent();

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

          const nameStyle = isUnreadeable ? { color: '#FF0000', fontSize: '17px' , pointerEvents: 'none'} : {};  

          return (
            <li key={index} onClick={() => handleComponentClick(jsxName, jsxPath)} className={activeComponent === jsxName ? 'active' : ''} style={nameStyle}>
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
