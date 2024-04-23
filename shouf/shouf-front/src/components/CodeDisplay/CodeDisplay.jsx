import React, { useContext } from 'react';
import { CodeDisplayContainer, CodeTitle, CodeBlockWrapper, StyledCodeBlock } from './CodeDisplay.styled';
import { SelectedComponentContext } from '../SelectedComponent';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';  // Feel free to choose another style

const CodeDisplay = ({ sidebarOpen }) => {
  const { activeComponent } = useContext(SelectedComponentContext);

  if (!activeComponent) {
    return <CodeDisplayContainer $sidebarOpen={sidebarOpen}>Select a component to view the code.</CodeDisplayContainer>;
  }

  const jsxCode = activeComponent.jsx ? activeComponent.jsx.code : 'JSX code unavailable';
  const stylesCode = activeComponent.styles ? activeComponent.styles.code : 'Styles code unavailable';
  const markdownCode = activeComponent.md ? activeComponent.md.code : 'Markdown documentation unavailable';

  return (
    <CodeDisplayContainer $sidebarOpen={sidebarOpen}>
      <h1>{activeComponent.jsx.name}</h1>
      <CodeBlockWrapper>
        <CodeTitle>Main Code</CodeTitle>
        <StyledCodeBlock language="javascript" style={materialDark}>
          {jsxCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
      <CodeBlockWrapper>
        <CodeTitle>Styles</CodeTitle>
        <StyledCodeBlock language="css" style={materialDark}>
          {stylesCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
      <CodeBlockWrapper>
        <CodeTitle>Documentation</CodeTitle>
        <StyledCodeBlock language="markdown" style={materialDark}>
          {markdownCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
    </CodeDisplayContainer>
  );
};

export default CodeDisplay;
