import styled from 'styled-components';

// Default button style
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

// Button style for primary case
export const PrimaryButton = styled(Button)`
  background-color: #28a745;
`;

// Button style for secondary case
export const SecondaryButton = styled(Button)`
  background-color: #dc3545;
`;

// Button style for disabled case
export const DisabledButton = styled(Button)`
  background-color: #6c757d;
  cursor: not-allowed;
`;
