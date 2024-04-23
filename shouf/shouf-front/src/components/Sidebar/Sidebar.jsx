import React, { useContext } from 'react';
import { SelectedComponentContext } from '../SelectedComponent';
import ComponentTree from '../ComponentTree';
import {
  SidebarContainer,
  SidebarTitle,
  SidebarTreeBox,
  SidebarButton,
  SidebarContent,

} from './Sidebar.styled.js';

const Sidebar = ({ isOpen, onToggle }) => {
  const { activeComponent, refreshComponents } = useContext(SelectedComponentContext);

  const handleRefresh = () => {
    refreshComponents();  // This would be a new method provided by the context
  };

  return (
    <SidebarContainer $sidebarOpen={isOpen}>
      {isOpen && (
         <SidebarContent $sidebarOpen={isOpen}>      
          <SidebarTitle>Components</SidebarTitle>
          <SidebarTreeBox>
            <ComponentTree />
          </SidebarTreeBox>
        </SidebarContent>
      )}
      <SidebarButton onClick={onToggle}>{isOpen ? '>' : '<'}</SidebarButton>
    </SidebarContainer>
  );
};

export default Sidebar;
