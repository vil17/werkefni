import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <NavLink exact to="/" className="breadcrumb-item">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
                <NavLink to="/bosses" className="breadcrumb-item">Bosses</NavLink>
            </li>
            <li className="breadcrumb-item">
                <NavLink to="/addboss" className="breadcrumb-item">Add Boss</NavLink>
            </li>
        </ol>
    </nav>
  )
}

export default NavigationBar;