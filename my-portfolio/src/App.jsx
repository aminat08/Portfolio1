import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from "./Components/Sidebar";
import Endpoint from "./Components/Endpoint";
import Admin from "./Components/Admin";
import AddNews from "./Components/AddNews";
import News from "./Components/News";
import Login from "./Student/Login";
import Log from "./Disney/Login";
import Dash from "./Disney/Dash"
const App = () =>{
  return(
    <Router>
      <Routes>
        {/* <Route path="/.." element={<Dashboard />} /> */}
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/endpoint" element={<Endpoint />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/news" element={<AddNews />} />
        <Route path="/new" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/log" element={<Log/>} />
        <Route path="/dash" element={<Dash/>} />
       
      </Routes>
    </Router>
  )
}
export default App