import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 col-12 mx-auto">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink class="navbar-brand" to="/">
                <figure className="logo">
                  <img src="Images/logo.jpg" alt="logo" />
                </figure>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />

              <div className="container-fluid">
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto ms-auto mb-2 mt-4 mb-lg-0">
                    <li className="nav-item ">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/shop"
                      >
                        SHOP
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link " to="/perfumes">
                        PERFUMES
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/nailpolish">
                        NAILPOLISH
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/lipsticks">
                        LIPSTICKS
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/description">
                        DETAILS & GALLERY
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="#">
                        BRANDS
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/mycart">
                        MY CART
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
