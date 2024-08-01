import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <>
    <Sidebar sidebarToggle={sidebarToggle}
    setSidebarToggle={setSidebarToggle}/>
    <div className={`${sidebarToggle ? "" : "  " }w-full`}>
        <Navbar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
      

    </div></>
  )
}

export default Dashboard