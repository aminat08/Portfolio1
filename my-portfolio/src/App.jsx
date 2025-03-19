import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Endpoint from "./Components/Endpoint";

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/endpoint" element={<Endpoint />} />
      </Routes>
    </Router>
  )
}
export default App