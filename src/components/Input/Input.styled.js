import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: ${props => props.disabled ? '#e0e0e0' : '#fff'};
  border-top: 1px solid ${props => props.error ? 'darkorange' : 'transparent'};
  border-left: 1px solid ${props => props.error ? 'darkorange' : 'transparent'};
  border-right: 1px solid ${props => props.valid ? 'green' : 'transparent'};
  border-bottom: 1px solid ${props => props.valid ? 'green' : 'transparent'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
