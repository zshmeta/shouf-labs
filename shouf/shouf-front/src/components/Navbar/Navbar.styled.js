import styled from 'styled-components';


export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    z-index: 99;
    top: 0;
    width: ${({ isOpen }) => (isOpen ? 'calc(100% - 270px)' : '100%')};
    left: -13px;
    border-bottom: 4px solid #ff9900;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out; 
    transform: ${({ isOpen }) => (isOpen ? 'translateX(270px)' : 'none')};
    position: fixed;
    background: repeating-linear-gradient( to bottom,whitesmoke, whitesmoke 33px, cyan 33px,  cyan 35px);

`;

export const Title = styled.h1`
    padding-left: 23px;
    margin-bottom: -1px;
    color: #ff9900;
    margin-left: ${({ isOpen }) => (isOpen ? '270px' : '0')};
    font-family: "Gloria Hallelujah", cursive;
    font-size: 51px;
`;

export const IconContainer = styled.div`
    margin-bottom: -20px;
    // right: ${({ isOpen }) => (isOpen ? '0' : '-270px')};
    width: 250px;
    
    `;
export const Img = styled.img`
    width: 30px;
    height: 30px;
    margin: 16px;
    cursor: pointer;
`;
