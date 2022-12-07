import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const MainNav = () => {

  return (
    <nav role='navigation' aria-label='main-navigation'>

      <div className='nav-links'>
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
      </div>

      <div className='nav-links'>
        <NavLink className="nav-item" to="/">
          Work
        </NavLink>
        <NavLink className="nav-item" to="/about">
          About
        </NavLink>
        <NavLink className="nav-item" to="../../assets/John Nguyen Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </NavLink>
      </div>

    </nav>
  )
}

export default MainNav;