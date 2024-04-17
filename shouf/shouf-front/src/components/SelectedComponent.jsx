import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';

const SelectedComponentContext = createContext();

//eslint-disable-next-line
const SelectedComponentProvider = ({ children }) => {
  const { data: components, loading, error } = useFetch('http://100.100.13.91:13002/api/components');
  const [activeComponentName, setActiveComponentName] = useState(null);
  const [activeComponentDetails, setActiveComponentDetails] = useState(null);
  const [activeComponentCode, setActiveComponentCode] = useState(null);
  const [activeComponentMd, setActiveComponentMd] = useState(null);
  const [activeComponentStyle, setActiveComponentStyle] = useState(null);
  const [activeComponentTest, setActiveComponentTest] = useState(null);

  const handleComponentClick = (jsxName) => {
  console.log("Setting active component name:", jsxName);
    setActiveComponentName(jsxName);
  };
useEffect(() => {
  if (activeComponentName && components) {
    const details = components.find(comp => comp.jsx && comp.jsx.name === activeComponentName);
    setActiveComponentCode(details?.jsx?.code);
    setActiveComponentMd(details?.md?.code);
    setActiveComponentStyle(details?.style?.code);
    setActiveComponentTest(details?.test?.code);
    setActiveComponentDetails(details);
    console.log("Active component details set:", details);
  } else {
    console.log("Active component name or components not set or empty:", activeComponentName, components);
  }
}, [activeComponentName, components]);

// In your Provider
const value = {
  activeComponent: activeComponentDetails,
  handleComponentClick,
  loading,
  error,
  components,
  };


  return (
    <SelectedComponentContext.Provider value={value}>
      {children}
    </SelectedComponentContext.Provider>
  );
};

export { SelectedComponentProvider, SelectedComponentContext };


