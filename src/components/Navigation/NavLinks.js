import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>HOME</NavLink>
    </li>
    <li>
      <NavLink to="/movies">MOVIES</NavLink>
    </li>
    <li>
      <NavLink to="/series">SERIES</NavLink>
    </li>
  </ul>
};

export default NavLinks;