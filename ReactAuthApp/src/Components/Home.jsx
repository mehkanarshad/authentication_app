import React from 'react'
import Registration from './auth/Registration'
import { useNavigate } from "react-router-dom";


export default function Home(props) {
  const navigate = useNavigate();
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    navigate("/dashboard")
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedIn}</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth}/>
    </div>
  )
}
