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



// import React, { useState, useEffect, useRef } from 'react';
// import { useFetch } from '../../utils/useFetch'; // Ensure correct path
// import { createEditor } from './Playground';
// import debounce from 'debounce';
// import { CodeEditor, SplitView, CodePreview, ReadmeContainer, TextArea } from './SandBox.styled';
// import { useCurrentComponent } from '../../utils/useContext';

// const SandBox = ({ sidebarOpen }) => {
//   const { data: componentData, loading, error } = useFetch('/api/components', {});
//   const [codeState, setCodeState] = useState('');
//   const editorRef = useRef(null);
//   const elRef = useRef(null);
//   const readmeRef = useRef(null); // Reference for the README container to inject Markdown

//   useEffect(() => {
//     if (componentData) {
//       const jsxCode = componentData.jsx.code; // Assuming the structure of your JSON
//       const mdContent = componentData.md.code; // Assuming the structure of your JSON
//       setCodeState(jsxCode);
//       editorRef.current.run(jsxCode);
//       readmeRef.current.innerHTML = mdContent; // Injecting Markdown directly
//     }
//   }, [componentData]);

//   useEffect(() => {
//     editorRef.current = createEditor(elRef.current);
//     // Run the initial default code
//     if (codeState) {
//       editorRef.current.run(codeState);
//     }
//   }, [codeState]);

//   const onCodeChange = (event) => {
//     const value = event.target.value;
//     setCodeState(value);
//     run(value);
//   };

//   const run = debounce(() => {
//     if (editorRef.current) {
//       editorRef.current.run(codeState);
//     }
//   }, 500);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching components: {error}</p>;

//   return (
//     <SplitView $sidebarOpen={sidebarOpen}>
//       <ReadmeContainer ref={readmeRef}>
//         <CodeEditor>
//           <TextArea value={codeState} onChange={onCodeChange} />
//         </CodeEditor>
//         <h2>Readme</h2>
//         <div>{/* README content dynamically injected */}</div>
//       </ReadmeContainer>
//       <CodePreview ref={elRef} />
//     </SplitView>
//   );
// };

// export default SandBox;

