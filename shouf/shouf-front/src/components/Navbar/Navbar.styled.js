import styled from 'styled-components';


export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    left: -13px;
    border-bottom: 1px solid #ff9900;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(270px)' : 'none')};
    position: fixed;
`;

export const Title = styled.h1`
    padding-left: 23px;
    padding-bottom: 23px;
    color: #ff9900;
    margin-left: ${({ isOpen }) => (isOpen ? '270px' : '0')};
    font-family: "Gloria Hallelujah", cursive;
    font-size: 51px;
`;

export const IconContainer = styled.div`
    padding-right: 23px;
    padding-bottom: 23px;
    margin-right: ${({ isOpen }) => (isOpen ? '270px' : '0')};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    border: 1px solid #ff9900;
`;
export const DarkModeIcon = styled.img.attrs({
  src: "../../assets/dark-mode.svg",
})``;

export const HelpDocsIcon = styled.img.attrs({
  src: "../../assets/help-docs.svg",
})``;

export const GitIcon = styled.img.attrs({
  src: "../../assets/git.svg",
})``;
