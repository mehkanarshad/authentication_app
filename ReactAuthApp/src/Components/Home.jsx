import React from 'react'
import Registration from './auth/Registration'
import { useNavigate } from "react-router-dom";
import Login from './auth/Login';
import axios from 'axios';


export default function Home(props) {
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    navigate("/dashboard")
  }

  const handleLogoutClick = () =>{
    axios.delete("http://localhost:3000/logout", {withCredentials: true}).then(response =>{
      props.handleLogout
    }).catch(error => {
      console.log("Logout error", error);
    })    
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedIn}</h1>
      <button onClick={handleLogoutClick}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
      <Login handleSuccessfulAuth={handleSuccessfulAuth}/>
    </div>
  )
}
