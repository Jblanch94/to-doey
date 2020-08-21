import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  justify-content-between background">
        <Link className="navbar-brand">Todoey</Link>
        <div className="d-flex">
          <Link className="nav-link justify-content-end">Johnny</Link>
          <Link className="nav-link">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
