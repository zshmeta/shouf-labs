import { useState } from 'react'
import Sidebar from './components/Sidebar'
import  Navbar  from './components/Navbar';
import CodeDisplay from './components/CodeDisplay'
import { SelectedComponentProvider } from './components/SelectedComponent'

import './App.css'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  


  return (
    <>
      <SelectedComponentProvider>
        
        <Navbar sidebarOpen={sidebarOpen} />

        <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
        <CodeDisplay sidebarOpen={sidebarOpen}/>
      </SelectedComponentProvider>
    </>
  )
}

export default App
