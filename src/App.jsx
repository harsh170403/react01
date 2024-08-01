import './App.css'

import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import {useState} from 'react'
import Card from './components/Card'

function App() {
 const [sidebarToggle , setSidebarToggle] = useState(false)

  return (
    <>
    <div className='flex'>
     
       <Sidebar sidebarToggle={sidebarToggle}/>
       <Dashboard sidebarToggle={sidebarToggle}
       setSidebarToggle={setSidebarToggle}/>
    </div>
     <Card sidebarToggle={sidebarToggle} />
    
    </>
  )
}

export default App
