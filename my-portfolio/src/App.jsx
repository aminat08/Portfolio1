import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  )
}
export default App