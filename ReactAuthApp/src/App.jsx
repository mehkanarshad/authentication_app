import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const handleLogin = (data) =>{
    setLoggedIn("LOGGED_IN");
    setUser(data.user);
  }

  const handleLogout = () =>{
    setLoggedIn("LOGGED_OUT");
    setUser({});
  }
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} handleLogout={handleLogout} handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
