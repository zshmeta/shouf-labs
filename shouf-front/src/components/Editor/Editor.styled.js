import styled from 'styled-components';

export const EditorWrapper = styled.div`
  margin-left: ${props => props.sidebarOpen ? '270px' : '0'};
  transition: all 0.5s ease-out;
  margin-margin: 0;
  width: ${props => props.sidebarOpen ? 'calc(100% - 270px)' : '100%'};
  height: 100vh;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  padding: 11px;
  justify-content: center;  
`;

export const EditorPreview = styled.div`
  flex: 0.5;
  height: 70vh;
  width: 100%;
  background-color: #393939;
  border: 1px solid #021435;
`;

export const EditorCode = styled.div`
  flex: 0.6;
  top: 0;
  height: 50vh;
  width: 100%;
  border: 1px solid #021435;
`;


