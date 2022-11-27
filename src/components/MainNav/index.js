import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './style.css';

const MainNav = () => {

  return (
    <nav role='navigation' aria-label='main-navigation'>

      <div classname='left-links'>
        <NavLink className="navbar-item" to="/">
          Home
        </NavLink>
      </div>

      <div classname='right-links'>
        <NavLink className="navbar-item" to="/">
          Projects
        </NavLink>
        <NavLink className="navbar-item" to="/about">
          About
        </NavLink>
        <NavLink className="navbar-item" to="/about">
          Resume
        </NavLink>
      </div>

    </nav>
  )
}

export default MainNav;