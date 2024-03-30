import React, { useState } from 'react';
import ComponentTree from '../ComponentTree';
import {
  SidebarContainer,
  SidebarTitle,
  SidebarLink,
  SidebarTreeBox,
  SidebarButton,
  SidebarRefreshButton,
  SidebarNotification
} from './Sidebar.styled.js';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onToggle }) => {

  const onRefresh = () => {
    // we post get to api to refresh the server
    fetch('http://100.100.13.119:13001/api/updateComponents')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    
  }

  return (
    <SidebarContainer className="sidebar" $sidebarOpen={isOpen}>
      {isOpen && (
        <>
        <SidebarRefreshButton onClick={onRefresh}>Refresh</SidebarRefreshButton>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <SidebarTitle>Components</SidebarTitle>
      <div className="component-tree">
        <SidebarTreeBox>
        <ComponentTree />
        </SidebarTreeBox>
      </div>
      </>
      )}
      <SidebarButton onClick={onToggle}>{isOpen ? '<' : '>'}</SidebarButton>
      <SidebarNotification>1</SidebarNotification>

    </SidebarContainer>
  );
};

export default Sidebar;
