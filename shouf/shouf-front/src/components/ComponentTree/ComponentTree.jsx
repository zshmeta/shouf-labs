import React, { useContext } from 'react';
import { useFetch } from '../../utils/useFetch';
import { ComponentTreeRoot, StyledList } from './ComponentTree.styled.js';
import { SelectedComponentContext } from '../SelectedComponent'; // Make sure this path is correct

const ComponentTree = () => {
  const { loading, error, data: components } = useFetch('http://100.100.13.91:13002/api/components');
  const { activeComponent, handleComponentClick } = useContext(SelectedComponentContext);

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
          const otherFileName = component.otherFiles[0]?.name.split('.')[0];
          const isUnreadable = !component.jsx;
          const jsxName = component.jsx ? component.jsx.name : (otherFileName ? `${otherFileName} : jsx unreadable` : "");

          // Debugging active component logic
          console.log("Current:", jsxName, "Active:", activeComponent, "Is Active:", activeComponent === jsxName);

          return (
            <li key={index} onClick={() => handleComponentClick(jsxName)}
                className={`${activeComponent === jsxName ? 'active' : ''} ${isUnreadable ? 'unreadable' : ''}`}>
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
