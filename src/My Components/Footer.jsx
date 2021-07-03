import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Footer Content</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to={{ pathname: "/" }} className="text-white">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 3
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 3
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#!" className="text-white">
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          <p>© 2021 Copyright:</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
