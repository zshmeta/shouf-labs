import {useState, useEffect } from 'react';
import { 
  ComponentTreeRoot,
  StyledList,
   } from './ComponentTree.styled.js';
import { useFetch } from '../../utils/useFetch'; // Ensure path is correct

const ComponentTree = () => {
  const [reload, setReload] = useState(0);
  const { data: components, loading, error } = useFetch('http://localhost:13001/api/componentsList');
    useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = () => {
      setReload((prevReload) => prevReload + 1);
    };

    return () => {
      ws.close();
    };
  }, []);

  if (loading) return <ComponentTreeRoot><p>Loading...</p></ComponentTreeRoot>;
  if (error) return <ComponentTreeRoot><p>Error: {error.message}</p></ComponentTreeRoot>;
  

  return (
          <ComponentTreeRoot>
            <p>Shouf</p>
             <p>Components</p>
            <StyledList>
              {components && components.map((componentName, index) => (
                <li key={index}>{componentName}</li>
              ))}
            </StyledList>
      
    </ComponentTreeRoot>
  );
};

export default ComponentTree;
