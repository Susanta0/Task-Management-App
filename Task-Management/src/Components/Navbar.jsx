import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/newtask">New Task</Link>
    <Link to="/edittask">Edit Task</Link>
    <Link to="/task">Task</Link>
    </>
  )
}
