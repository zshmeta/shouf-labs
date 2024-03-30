import styled from 'styled-components';

export const EditorWrapper = styled.div`
  margin-left: ${props => props.$sidebarOpen ? '270px' : '0'};
  transition: all 0.5s ease-out;
  margin-margin: 0;
  width: ${props => props.$sidebarOpen ? 'calc(100% - 270px)' : '100%'};
  height: max-content;
  display: flex;
  flex-direction: row;
  padding: 11px;
  justify-content: center;  
`;

export const EditorPreview = styled.div`
  flex: 0.5;
  height: max-content;
  width: 100%;;
  margin-top: 22%;
  background-color: #393939;
  border: 1px solid #021435;
`;

export const EditorCode = styled.div`
  flex: 0.6;
  top: 0;
  padding-right: 20px;
  height: max-content;
  width: 100%;
`;


