import React, { useState } from 'react'
import Logo from '../assets/financeLogo.png'
import Signup from './Signup';
import Login from './Login';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [SignupSwitch, setSignupSwitch] = useState(0)
  const [LoginSwitch, setLoginSwitch] = useState(0)

  return (
    <>
    { (SignupSwitch == 1) ? <Signup SignupSwitch={setSignupSwitch}/> : ""}
    { (LoginSwitch == 1) ? <Login Switch={setLoginSwitch}/> : ""}

    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={Logo} className="bi" width="40" height="40" role="img" aria-label="Bootstrap"/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2  link-body-emphasis">Home</Link></li>
          <li><Link to="/dashboard" className="nav-link px-2 link-secondary">Dashboard</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button onClick={()=> setLoginSwitch(1)} type="button" className="btn btn-outline-light me-2">Login</button>
          <button onClick={()=> setSignupSwitch(1)} type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Nav