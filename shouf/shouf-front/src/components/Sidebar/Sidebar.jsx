import React, { useContext } from 'react';
import { SelectedComponentContext } from '../SelectedComponent';
import ComponentTree from '../ComponentTree';
import {
  SidebarContainer,
  SidebarTitle,
  SidebarTreeBox,
  SidebarButton,
  SidebarRefreshButton,
  SidebarNotification
} from './Sidebar.styled.js';

const Sidebar = ({ isOpen, onToggle }) => {
  const { activeComponent, refreshComponents } = useContext(SelectedComponentContext);

  const handleRefresh = () => {
    refreshComponents();  // This would be a new method provided by the context
  };

  return (
    <SidebarContainer $sidebarOpen={isOpen}>
      {isOpen && (
        <>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <SidebarTitle>Components</SidebarTitle>
          <SidebarTreeBox>
            <ComponentTree />
          </SidebarTreeBox>
          <SidebarRefreshButton onClick={handleRefresh}>Refresh</SidebarRefreshButton>
        </>
      )}
      <SidebarButton onClick={onToggle}>{isOpen ? '>' : '<'}</SidebarButton>
      <SidebarNotification>{activeComponent ? '1' : '0'}</SidebarNotification>
    </SidebarContainer>
  );
};

export default Sidebar;
