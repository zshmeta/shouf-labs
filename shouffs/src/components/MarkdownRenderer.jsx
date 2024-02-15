/* eslint-disable*/
import React from 'react';
import ReactMarkdown from 'react-markdown';
  // Importing syntax highlighter components if needed
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ content }) => {
  // Optional: Setup for custom rendering of code blocks using react-syntax-highlighter
  
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
  };
  

  return <ReactMarkdown /* renderers={renderers} */ children={content} />;
};

export default MarkdownRenderer;
