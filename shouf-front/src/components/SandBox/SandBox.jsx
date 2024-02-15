import React, { useState, useEffect, useRef } from 'react';
import  { createEditor }  from './Playground'
import debounce from 'debounce';
import { CodeEditor, SplitView, CodePreview } from './SandBox.styled';


const code = `import x from 'x';

// 
function Greet() {
  return <span>Hello World!</span>
}

<Greet />
`;

// eslint-disable-next-line react/prop-types
const SandBox = ({sidebarOpen}) => {
  const [codeState, setCodeState] = useState(code);
  const editorRef = useRef(null);
  const elRef = useRef(null);

  useEffect(() => {
    editorRef.current = createEditor(elRef.current);
    editorRef.current.run(code);
  }, []);

  const onCodeChange = (event) => {
    const value = event.target.value;
    setCodeState(value);
    run(value);
  };

  const run = debounce(() => {
    if (editorRef.current) {
      editorRef.current.run(codeState);
    }
  }, 500);


  return (
      <SplitView sidebarOpen={sidebarOpen}>
        <CodeEditor>
          <textarea value={codeState} onChange={onCodeChange} />
        </CodeEditor>
        <CodePreview ref={elRef} />
      </SplitView>
  );
};

export default SandBox;