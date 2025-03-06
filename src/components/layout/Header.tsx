import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Storage/Redux/store';
import { cartItemModel } from '../../Interfaces';
let logo = require('../../assets/images/mango.png');

const Header = () => {
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-5">
        <div className="container-fluid">
          <NavLink className="nav-link bg-warning" aria-current="page" to="/">
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
            <ul className=" navbar-nav bg-dark navbar-dark ms-auto me-5">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/shoppingcart"
                >
                  <i
                    className="bi bi-cart2 position-relative d-inline-block rounded "
                    style={{ fontSize: '25px' }}
                  >
                    <span
                      className={`position-absolute start-150 translate-middle ${
                        shoppingCartFromStore.length ? 'circle' : ''
                      } text-white text-size`}
                    >
                      {shoppingCartFromStore?.length
                        ? `${shoppingCartFromStore.length}`
                        : ''}
                    </span>
                  </i>
                </NavLink>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-dark text-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    className="bi bi-person-fill text-secondary"
                    style={{ fontSize: '25px' }}
                  ></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="nav-item">
                    <NavLink className="dropdown-item" to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="dropdown-item" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="dropdown-item" to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
