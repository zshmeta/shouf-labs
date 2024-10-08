import React, { useState, useEffect, useRef } from 'react';
import  { createEditor }  from './Playground'
import debounce from 'debounce';
import { CodeEditor, SplitView, CodePreview, ReadmeContainer, TextArea } from './SandBox.styled';
import { useCurrentComponent } from '../../utils/useContext';



const code = `


const Button = () => {
  return <button>Hello, World!</button>;
}

<Button />

`; 

// eslint-disable-next-line react/prop-types
const SandBox = ({sidebarOpen}) => {
  const [codeState, setCodeState] = useState(code);
  const editorRef = useRef(null);
  const elRef = useRef(null);

  const { activeComponentCode } = useCurrentComponent();


  useEffect(() => {
    console.log("Active component code changed:", activeComponentCode);
 }, [activeComponentCode]);


 


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

      <SplitView $sidebarOpen={sidebarOpen}>

            <ReadmeContainer>

        <CodeEditor>
          <textarea value={codeState} onChange={onCodeChange} />
        </CodeEditor>
                  <h2>Readme</h2>
          <p>Write some code and see the magic happen!</p>
        </ReadmeContainer>

        <CodePreview ref={elRef} />

    
      </SplitView>
  );
};

export default SandBox;

