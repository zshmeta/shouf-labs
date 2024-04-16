import React from 'react';
import { NavbarContainer, Title, IconContainer } from './Navbar.styled';
import { Img } from './Navbar.styled';
import DarkModeIcon from '../../assets/dark-mode.svg';
import HelpDocsIcon from '../../assets/help-docs.svg';
import GitIcon from '../../assets/git.svg';
// eslint-disable-next-line react/prop-types
const Navbar = ({ sidebarOpen, setActiveComponent }) => {
    return (
        <NavbarContainer isOpen={sidebarOpen}>
            {setActiveComponent ? (
                <Title onClick={() => setActiveComponent('yourComponent')}>
                    Shouf Labs
                </Title>
            ) : (
                <Title> Shouf Labs</Title>
            )}
            <IconContainer>
                <Img src={DarkModeIcon} alt="Dark Mode" />
                <Img src={HelpDocsIcon} alt="Help Docs" />
                <Img src={GitIcon} alt="Git" />
            </IconContainer>
        </NavbarContainer>
    );
};

export default Navbar;