import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Editor  from './components/Editor'
import SandBox from './components/SandBox'
import { SelectedComponentProvider } from './components/SelectedComponent'

import './App.css'

const App = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  
  return (
    <>
      <SelectedComponentProvider>
      <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
      <Editor sidebarOpen={sidebarOpen} />
      <SandBox sidebarOpen={sidebarOpen} />
      </SelectedComponentProvider>
    </>
  )
}

export default App
