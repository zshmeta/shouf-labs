import styled from 'styled-components';


export const Container = styled.div`\
  border: 1px solid red;
`;

export const CodeSquare = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: calc(50% - 10px);  // Assumes 20px gap
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre-wrap;  // Maintains whitespace formatting
  overflow: auto;  // Adds scrollbars if necessary
`;
