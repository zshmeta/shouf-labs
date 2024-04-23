import React, { useContext } from 'react';
import { CodeDisplayContainer, CodeTitle, JsxName, CodeBlockWrapper, StyledCodeBlock, NoComponentSelected } from './CodeDisplay.styled';
import { SelectedComponentContext } from '../SelectedComponent';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeDisplay = ({ sidebarOpen }) => {
  const { activeComponent } = useContext(SelectedComponentContext);

  if (!activeComponent) {
    // Use the new styled component for the no component selected message
    return (
      <CodeDisplayContainer $sidebarOpen={sidebarOpen}>
        <NoComponentSelected>Select a component to view the code.</NoComponentSelected>
      </CodeDisplayContainer>
    );
  }

  const jsxCode = activeComponent.jsx ? activeComponent.jsx.code : 'JSX code unavailable';
  const stylesCode = activeComponent.styles ? activeComponent.styles.code : 'Styles code unavailable';
  const markdownCode = activeComponent.md ? activeComponent.md.code : 'Markdown documentation unavailable';

  return (
    <CodeDisplayContainer $sidebarOpen={sidebarOpen}>
      <JsxName>{activeComponent.jsx.name}</JsxName>
        <CodeTitle>Main Code</CodeTitle>
      <CodeBlockWrapper>
        <StyledCodeBlock language="javascript" style={materialDark}>
          {jsxCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
        <CodeTitle>Styles</CodeTitle>
      <CodeBlockWrapper>
        <StyledCodeBlock language="css" style={materialDark}>
          {stylesCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
        <CodeTitle>Documentation</CodeTitle>
      <CodeBlockWrapper>
        <StyledCodeBlock language="markdown" style={materialDark}>
          {markdownCode}
        </StyledCodeBlock>
      </CodeBlockWrapper>
    </CodeDisplayContainer>
  );
};

export default CodeDisplay;
