import React, { createContext, useContext, useState } from 'react';
// import fs from 'fs';

const SelectedComponentContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedComponentProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentCode, setActiveComponentCode] = useState('');

  // const handleComponentClick = (name, path) => {
  //   setActiveComponent(name);
  //   fs.readFile(path, 'utf8', (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       setActiveComponentCode('// Error fetching component code');
  //     } else {
  //       setActiveComponentCode();
  //       console.log('Received data for component:', name);
  //       console.log('Received Path:', path);
  //     }
  //   });
  // };

  console.log('Active Component:', activeComponent);
  console.log('Active Component Code:', activeComponentCode);

  const value = {
    activeComponent,
    activeComponentCode,
    // handleComponentClick,
  };

  return (
    <SelectedComponentContext.Provider value={value}>
      {children}
    </SelectedComponentContext.Provider>
  );
};

export { SelectedComponentProvider, SelectedComponentContext };