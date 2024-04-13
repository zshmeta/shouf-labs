import React, { createContext, useContext, useState } from 'react';
// import fs from 'fs';

const SelectedComponentContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (name) => {
    setActiveComponent(name);
    console.log('Selected component:', name);
  };

  console.log('Active Component:', activeComponent);

  const value = {
    activeComponent,
    handleComponentClick,
  };

  return (
    <SelectedComponentContext.Provider value={value}>
      {children}
    </SelectedComponentContext.Provider>
  );
};

export { SelectedComponentProvider, SelectedComponentContext };