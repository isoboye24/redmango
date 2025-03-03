import React from 'react';
import { NavLink } from 'react-router-dom';
let logo = require('../../assets/images/mango.png');

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5">
        <div className="container-fluid">
          <NavLink className="nav-link" aria-current="page" to="/">
            <img src={logo} style={{ height: '40px' }} className="m-1" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Panel
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/shoppingcart"
                >
                  <i className="bi bi-cart2" style={{ fontSize: '25px' }}></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                  <i
                    className="bi bi-person-fill"
                    style={{ fontSize: '25px' }}
                  ></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
