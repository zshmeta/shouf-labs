import styled from 'styled-components';

export const SplitView = styled.div`
  margin-left: ${props => props.$sidebarOpen ? '260px' : '0'};
  transition: all 0.5s ease-out;

  width: ${props => props.$sidebarOpen ? 'calc(100% - 270px)' : '100%'};
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  padding: 20px;
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

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  `;
export const CodeEditor = styled.div`
  top: 0;
  height: 100%; 
  width: 70%;
  border: 1px solid #021435;
  display: flex;
  flex-direction: raw;
  
  textarea {
    width: 100%;
    height: 80%;
    border: none;
    background-color: #040e1a;
    padding: 20px;
    font-size: 22px;
    font-family: 'Hallelujah', cursive;
  }
`;

export const ReadmeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100%;
  width: 100%; /* Adjust the width as needed */
  background-color: #393939;
  border: 1px solid #021435;
`;
