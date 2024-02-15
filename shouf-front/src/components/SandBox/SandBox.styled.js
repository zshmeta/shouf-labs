import styled from 'styled-components';

export const SplitView = styled.div`
    margin-left: ${props => props.sidebarOpen ? '260px' : '0'};
    transition: all 0.5s ease-out;

    width: ${props => props.sidebarOpen ? 'calc(100% - 270px)' : '100%'};
    height: 70vh;
    border: 3px solid #000;
    display: flex;
    flex-direction: row; // Keep this as row for side by side view
    padding: 11px;
    justify-content: center;
`;

export const CodePreview = styled.div`
  flex: 0.5;
  height: 60vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 100%;
  background-color: #393939;
  border: 1px solid #021435;
`;

export const CodeEditor = styled.div`
  flex: 0.5; 
  top: 0;
  height: max-content; 
  width: 100%;
  border: 1px solid #021435;
    textarea {
        width: 100%;
        height: max-content;
        border: none;
        background-color: #393939;
        color: #fff;
        padding: 20px;
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
    }
`;
