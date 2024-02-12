import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { 
  EditorWrapper,
  EditorPreview,
  EditorCode
   } from "./Editor.styled";

// eslint-disable-next-line react/prop-types
const Editor = ({ sidebarOpen }) => {
  const code = `
  () => {
        return (
        <div>
            <h1>Hello, World!</h1>
        </div>
      );
  }
  `;
  return (
    <EditorWrapper sidebarOpen={ sidebarOpen }>
      <LiveProvider code={code}>
        <EditorCode>
          <h3>Code</h3>
        <LiveEditor />
        </EditorCode>
        <EditorPreview >
        <LivePreview />
        </EditorPreview>
        <LiveError />
      </LiveProvider>
    </EditorWrapper>
  );
}

export default Editor;

