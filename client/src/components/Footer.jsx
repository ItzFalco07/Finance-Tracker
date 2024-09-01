import React from 'react'
import Logo from '../assets/financeLogo.png'

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src={Logo} className="bi" width="30" height="30"/>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://github.com/ItzFalco07"><i className="fa-brands fa-github fa-xl"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.upwork.com/freelancers/~0184cf5697571fafe6"><i className="fa-brands fa-upwork fa-xl"></i></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://t.me/+nygHO4lU-hIyNWRl"><i className="fa-brands fa-telegram fa-xl"></i></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer