import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Endpoint from "./Components/Endpoint";
import Admin from "./Components/Admin";
import AddNews from "./Components/AddNews";
import News from "./Components/News";

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/endpoint" element={<Endpoint />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/news" element={<AddNews />} />
        <Route path="/new" element={<News />} />
      </Routes>
    </Router>
  )
}
export default App