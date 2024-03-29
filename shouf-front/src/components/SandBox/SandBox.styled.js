import styled from 'styled-components';

export const SplitView = styled.div`
    margin-left: ${props => props.$sidebarOpen ? '260px' : '0'};
    transition: all 0.5s ease-out;

    width: ${props => props.$sidebarOpen ? 'calc(100% - 270px)' : '100%'};
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CodePreview = styled.div`
  height: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 100%;
  background-color: #393939;
  border: 1px solid #021435;
`;

export const CodeEditor = styled.div`
  top: 0;
  height: 50%; 
  width: 100%;
  border: 1px solid #021435;
    textarea {
        width: 100%;
        height: 100%;
        border: none;
        background-color: #040e1a;
        padding: 20px;
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
    }
`;
