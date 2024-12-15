import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>

<Navbar/>

<Sidebar/><Outlet/>



    </div>
  )
}

export default Layout