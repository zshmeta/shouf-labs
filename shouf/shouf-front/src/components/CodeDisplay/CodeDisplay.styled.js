import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';



export const NoComponentSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;  
  height: 100vh; 
  margin: 213px;
  font-family: 'Gloria Hallelujah', cursive; 
  color: darkblue; 
  font-size: 44px; 
  `;

export const JsxName = styled.div`
  font-family: 'Gloria Hallelujah', cursive; 
  color: darkblue; 
  font-size: 44px;
  font-weight: bold;
  align-self: flex-start;
  text-decoration: underline;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 77px;
  margin-bottom: 33px;
  `;

export const CodeDisplayContainer = styled.div`
  display: flex; 
  color: darkblue;
  flex-direction: column;
  align-items: center;
  margin-left: ${props => props.$sidebarOpen ? '260px' : '0'};
  transition: all 0.5s ease-out;
  width: ${props => props.$sidebarOpen ? 'calc(100% - 270px)' : '100%'};
  padding: 20px;
`;


export const CodeBlockWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledCodeBlock = styled(SyntaxHighlighter)`
  width: 100%;
  justify-content: center;
  border: 2px solid darkblue;
`;

export const CodeTitle = styled.h2`
  color: darkblue;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;
