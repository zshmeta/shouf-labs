import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <>
      <Sidebar isOpen={sidebarOpen} onToggle={handleSidebarToggle} />
      <Editor sidebarOpen={sidebarOpen} />
    </>
  )
}

export default App
