import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetch } from '../utils/useFetch';

const SelectedComponentContext = createContext();

//eslint-disable-next-line
const SelectedComponentProvider = ({ children }) => {
  const { data: components, loading, error } = useFetch('http://100.100.13.91:13002/api/components');
  const [activeComponentName, setActiveComponentName] = useState(null);
  const [activeComponentDetails, setActiveComponentDetails] = useState(null);

  useEffect(() => {
    if (activeComponentName && components) {
      const details = components.find(comp => comp.name === activeComponentName);
      setActiveComponentDetails(details);
    }
  }, [activeComponentName, components]);

  const handleComponentClick = (componentName) => {
    setActiveComponentName(componentName);
  };

  const value = {
    activeComponent: activeComponentDetails,
    handleComponentClick,
    loading,
    error
  };

  return (
    <SelectedComponentContext.Provider value={value}>
      {children}
    </SelectedComponentContext.Provider>
  );
};

export { SelectedComponentProvider, SelectedComponentContext };
