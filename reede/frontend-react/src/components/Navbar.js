import './Design.css'
import { Link } from 'react-router-dom'
import React from 'react'
import {useContext} from "react"
import {Context} from "../store"
import 'antd/dist/antd.css'


function Navbar() {
  
  const [state] = useContext(Context)

  if (!state.auth.token) {

  return(

    React.createElement("header", { className: "navbar" }, 

    React.createElement("div", { className: "navbar__title"},
    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
      <img className="logo" src="webshio.png" alt=""/> 
    </Link>),

    React.createElement("div", { className: "navbar__item"},
    <Link to="/showposts" style={{ textDecoration: 'none', color: 'white' }}>View posts
    </Link>), 

    React.createElement("div", { className: "navbar__item"},
    <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>Register
    </Link>), 
    
    React.createElement("div", { className: "navbar__item"},
    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login
    </Link>)
    ))

  } else {
  
    return(
      React.createElement("header", { className: "navbar" }, 

      React.createElement("div", { className: "navbar__title"},
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <img className="logo" src="webshio.png" alt=""/> 
      </Link>),

      React.createElement("div", { className: "navbar__item"},
      <Link to="/addposts" style={{ textDecoration: 'none', color: 'white' }}>Add post
      </Link>), 

      React.createElement("div", { className: "navbar__item"},
      <Link to="/showposts" style={{ textDecoration: 'none', color: 'white' }}>View posts
      </Link>), 

      React.createElement("div", { className: "navbar__item"},
      <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Logout
      </Link>)
      ))
    }
}

export default Navbar