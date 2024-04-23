import styled from 'styled-components';

export const CodeDisplayContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin-left: ${props => props.$sidebarOpen ? '260px' : '0'};
  transition: all 0.5s ease-out;
  width: ${props => props.$sidebarOpen ? 'calc(100% - 270px)' : '100%'};
  padding: 20px;
`;

export const CodeBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledCodeBlock = styled(SyntaxHighlighter)`
  flex: 1;
  margin: 0 10px;
  min-width: 0;  // Prevents flex items from growing beyond their containers
`;

export const CodeTitle = styled.h2`
  color: darkblue;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;
