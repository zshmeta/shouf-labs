import React, { useState, useEffect } from 'react';
// Import your components
import MarkdownRenderer from './components/MarkdownRenderer';
import ComponentPreview from './components/ComponentPreview';
import CodeBlock from './components/CodeBlock';

function App() {
  // Simulating fetched components data
  const [components] = useState([
    {
      name: "ExampleComponent",
      markdown: "This is an **example component** documentation.",
      code: `const ExampleComponent = () => <div>Hello, World!</div>;`,
      language: 'jsx'
    }
  ]);

  return (
    <div>
      <h1>Components AST Viewer</h1>
      {components.map((component, index) => (
        <div key={index}>
          <MarkdownRenderer content={component.markdown} />
          <ComponentPreview componentName={component.name} />
          <CodeBlock code={component.code} language={component.language} />
        </div>
      ))}
    </div>
  );
}

export default App;
