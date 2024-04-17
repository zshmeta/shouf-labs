import React, { useContext } from 'react';
import { useFetch } from '../../utils/useFetch';
import { ComponentTreeRoot, StyledList } from './ComponentTree.styled.js';
import { SelectedComponentContext } from '../SelectedComponent'; // Make sure this path is correct

const ComponentTree = () => {
// In ComponentTree.js
const { components, activeComponent, handleComponentClick, loading, error } = useContext(SelectedComponentContext);

if (loading) {
  return <ComponentTreeRoot><p>Loading...</p></ComponentTreeRoot>
}
if (error) {
  return <ComponentTreeRoot><p>Error: {error.message}</p></ComponentTreeRoot>;
}

  console.log("Components:", components);
  console.log("Active component:", activeComponent);
return (
  <ComponentTreeRoot>
    <StyledList>
      {components.map((component, index) => {
        const otherFileName = component.otherFiles[0]?.name.split('.')[0];
        const isUnreadable = !component.jsx;
        const jsxName = component.jsx ? component.jsx.name : (otherFileName ? `${otherFileName} : jsx unreadable` : "");
        console.log(`jsxName: ${jsxName},  activeComponent.name: ${activeComponent?.jsx?.name}`);

        return (
          <li key={jsxName} onClick={() => handleComponentClick(jsxName)}
              className={`${activeComponent?.jsx?.name === jsxName ? 'active' : ''} ${isUnreadable ? 'unreadable' : ''}`}>
            <span>{jsxName}</span>
          </li>
        );
      })}
    </StyledList>
  </ComponentTreeRoot>
);
}
export default ComponentTree;
