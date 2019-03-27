import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li>
                <NavLink to="/bosses" className="nav-link">Bosses</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavigationBar;