import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './cards/Home';
import Shorts from './cards/Shorts';
import Subscriptions from './cards/Subscriptions';
import History from './cards/History'; // Ensure this matches the export

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <div className={`${sidebarToggle ? "sidebar-open" : ""} w-full`}>
          <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
          <Home sidebarToggle={sidebarToggle}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
