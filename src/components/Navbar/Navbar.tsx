import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav className='purple darken-2'>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          React + TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/index.html">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}