import React, { useContext } from 'react';
import styled from 'styled-components';
import { SelectedComponentContext } from '../SelectedComponent'; 
import { CodeSquare, Container } from './CodeDisplay.styled';

const CodeDisplay = () => {
  const { activeComponentCode, activeComponentMd, activeComponentStyle, activeComponentTest } = useContext(SelectedComponentContext);

  console.log("Active component code:", activeComponentCode);
  console.log("Active component md:", activeComponentMd);
  console.log("Active component style:", activeComponentStyle);
  console.log("Active component test:", activeComponentTest);
  



  return (
    <Container>
      {activeComponentCode && (
        <CodeSquare>
          <h4>Component Code</h4>
          <pre>{activeComponentCode}</pre>
        </CodeSquare>
      )}
      {activeComponentMd && (
        <CodeSquare>
          <h4>Markdown</h4>
          <pre>{activeComponentMd}</pre>
        </CodeSquare>
      )}
      {activeComponentStyle && (
        <CodeSquare>
          <h4>Styles</h4>
          <pre>{activeComponentStyle}</pre>
        </CodeSquare>
      )}
      {activeComponentTest && (
        <CodeSquare>
          <h4>Tests</h4>
          <pre>{activeComponentTest}</pre>
        </CodeSquare>
      )}
    </Container>
  );
};

export default CodeDisplay;
