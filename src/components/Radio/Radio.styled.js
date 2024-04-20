import styled from 'styled-components';

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  /* Hide the default radio button */
  display: none;
`;

export const RadioLabel = styled.label`
  /* Styling for the radio label */
  margin-left: 8px;
  font-size: 14px;
  color: #333;
`;

export const RadioIndicator = styled.span`
  /* Styling for the radio indicator */
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #333;
  background-color: ${props => (props.checked ? '#333' : 'transparent')};
`;
