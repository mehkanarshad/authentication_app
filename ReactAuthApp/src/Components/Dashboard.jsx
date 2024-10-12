import React from 'react'

export default function Dashboard(props) {
  return (
    <div>
      <h1>status: {props.loggedIn}</h1>
      <h1>Dashboard</h1>
    </div>
  )
}
