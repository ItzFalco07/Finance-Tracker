import React, { useState } from 'react';
import Logo from '../assets/financeLogo.png';
import { Link } from 'react-router-dom';

const NavDone = ({ userUrl }) => {
  const [Toggle, setToggle] = useState(0);

  const handleToggle = () => {
    setToggle(prevToggle => (prevToggle === 0 ? 1 : 0));
  };

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div id='nav' className="d-flex align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img src={Logo} className="bi" width="40" height="40" role="img" aria-label="Bootstrap" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to="/dashboard" className="nav-link px-2 link-body-emphasis">Dashboard</Link></li>
          </ul>

          <div className="dropdown text-end">
            <a onClick={handleToggle} className="d-block link-body-emphasis text-decoration-none">
              <img src={userUrl} width="32" height="32" className="rounded-circle" />
            </a>
            {Toggle === 1 && (
              <ul className="dropdown-menu text-small show">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href='https://budgetbuddy-cplc.onrender.com/auth/google/logout'>Log out</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavDone;
