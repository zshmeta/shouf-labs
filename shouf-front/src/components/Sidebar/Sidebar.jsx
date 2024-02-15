import React, { useState } from 'react';
import ComponentTree from '../ComponentTree';
import {
  SidebarContainer,
  SidebarTitle,
  SidebarLink,
  SidebarTreeBox,
  SidebarButton
} from './Sidebar.styled.js';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onToggle }) => {

  return (
    <SidebarContainer className="sidebar" sidebarOpen={isOpen}>
      {isOpen && (
        <>
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

    </SidebarContainer>
  );
};

export default Sidebar;
