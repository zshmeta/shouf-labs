import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${props => props.$sidebarOpen ? '250px' : '0px'};
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: 
  padding: 20px;
  padding-top: 51px;
  border-right: 5px solid #FF9900;
  background: repeating-linear-gradient( to bottom,whitesmoke, whitesmoke 33px, cyan 33px,  cyan 35px);
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
  top: 2px;
  width: 10px;
  right: ${props => (props.$sidebarOpen ? '-33px' : '-41px')};
  transition: width 0.3s ease;
  background-color: rgba(255 255 255 / 0.62);
  color: #393939;
  border: 1px solid cyan;
  border-radius: 0% 30% 30% 0;
`;
