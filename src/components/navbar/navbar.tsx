import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar: React.FC = () => {

    const [ menu, setMenuView ] = useState(false);
    const onToggle = () => {
      setMenuView(!menu);
    }

    const show = menu ? 'show': '';

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <h5>Finley Bot <b>Site</b></h5>
        </Link>
        <button className="navbar-toggler" onClick={onToggle} type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show} id="navbarColor02">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/docs" className="nav-link">
                Docs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>    
    );
}

export default Navbar;
