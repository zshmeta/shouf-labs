import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${props => props.$sidebarOpen ? '250px' : '0px'};
  transition: width 0.3s ease-in-out 0.1s;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: 
  padding: 20px;
  padding-top: 51px;
  border-right: 5px solid #FF9900;
  background: repeating-linear-gradient( to bottom,whitesmoke, whitesmoke 33px, cyan 33px,  cyan 35px);
  z-index: 100;
`;
export const SidebarContent = styled.div`
  opacity: ${props => (props.$sidebarOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out 0.1s;
`;
export const SidebarTitle = styled.h2`
  font-size: 37px;
  font-weight: bold;
  font-family: 'Gloria Hallelujah', cursive;
  color: darkblue;
  margin-bottom: 10px;
`;

export const SidebarLink = styled.a`
  display: block;
  color: cyan;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: #F9F9F9;
  }
`;

export const SidebarTreeBox = styled.div`
  margin-top: 20px;
  border: 2px solid #f2f2f2;
  padding: 10px;
  color: #f2f2f2;
`;
export const SidebarButton = styled.button`
  position: absolute;
  top: 9px;
  font-size: 8px;
  margin: -3px 11px;
  right: ${props => (props.$sidebarOpen ? '-33px' : '-41px')};
  transition: width 0.3s ease;
  background-color: rgba(255 255 255 / 0.62);
  color: #393939;
  border: 4px solid cyan;
  border-left: 4px solid #FF9900;
  cursor: pointer;
  border-radius: 0% 30% 30% 0;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    border-left: 4px solid #FF9900;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
`;


