import { useState } from 'react'
import './App.css'
import  Home from "./Components/Home"
import Dashboard from "./Components/Dashboard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
