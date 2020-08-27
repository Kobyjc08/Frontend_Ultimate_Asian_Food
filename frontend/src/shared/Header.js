import React from "react";
import logoLg from "../images/logo_190x104.jpg";
export const Header = () => {
  return (
    <header className="header mb-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="index.html" className="navbar-brand home">
            <img
              src={logoLg}
              alt="The Ultimate Asian Food Eshop Logo"
              className="d-none d-md-inline-block"
            />
            <img
              src="img/logo_120x67.jpg"
              alt="The Ultimate Asian Food Eshop Logo"
              className="d-inline-block d-md-none"
            />
            <span className="sr-only">Obaju - go to homepage</span>
          </a>
          <div className="navbar-buttons">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-align-justify"></i>
            </button>
            <a
              href="basket.html"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <a href="basket.html" className="btn btn-primary navbar-btn">
                <i className="fa fa-shopping-cart"></i>
                <span>0 items in cart</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div id="search" className="collapse">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};
