import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useEffect } from "react";
import { useCurrentComponent } from '../../utils/useContext';
import { useState } from "react";

import { 
  EditorWrapper,
  EditorPreview,
  EditorCode
} from "./Editor.styled";

// eslint-disable-next-line react/prop-types
const Editor = ({ sidebarOpen }) => {
  // Access the active component's code directly from the context
  const { activeComponentCode } = useCurrentComponent();

 useEffect(() => {
  
    console.log("Active component code changed:", activeComponentCode);
 }, [activeComponentCode]);
  const header = `import React, { useState } from 'react';
  import styled from 'styled-components';`
  const codeToRender = activeComponentCode || `  () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <p>Count: {count}</p>
      </div>
    );
  }
`;

  return (
    <EditorWrapper $sidebarOpen={sidebarOpen}>
      <LiveProvider code={codeToRender} scope={{ useState }}>
        <EditorCode>
          <h3>Code</h3>
          <LiveEditor />
        </EditorCode>
        <EditorPreview>
          <h3>Preview</h3>
          <LivePreview />
          <LiveError />
        </EditorPreview>
      </LiveProvider>
    </EditorWrapper>
  );

};

export  default Editor;
