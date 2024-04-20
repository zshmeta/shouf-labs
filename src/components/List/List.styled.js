import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.div`
  font-weight: bold;
`;

export const AccordionContent = styled.div`
  padding: 10px;
`;
