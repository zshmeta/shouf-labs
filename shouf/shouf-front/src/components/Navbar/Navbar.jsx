import React from 'react';
import { NavbarContainer, Title, IconContainer } from './Navbar.styled';
import { DarkModeIcon, HelpDocsIcon, GitIcon } from './Navbar.styled';

const Navbar = ({ sidebarOpen, setActiveComponent }) => {
    return (
        <NavbarContainer isOpen={sidebarOpen}>
            {setActiveComponent ? (
                <Title onClick={() => setActiveComponent('yourComponent')}>
                   
                </Title>
            ) : (
                <Title> Shouf Labs</Title>
            )}
            <IconContainer>
                <DarkModeIcon  />
                <HelpDocsIcon  />
                <GitIcon />
            </IconContainer>
        </NavbarContainer>
    );
};

export default Navbar;