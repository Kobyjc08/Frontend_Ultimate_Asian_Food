import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoLg from "../images/logo_190x104.jpg";
import logoSm from "../images/logo_120x67.jpg";
export const Header = () => {
  return (
    <header className="header mb-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand home">
            <img
              src={logoLg}
              alt="The Ultimate Asian Food Eshop Logo"
              className="d-none d-md-inline-block"
            />
            <img
              src={logoSm}
              alt="The Ultimate Asian Food Eshop Logo"
              className="d-inline-block d-md-none"
            />
            <span className="sr-only">The Ultimate Asian Food Eshop</span>
          </Link>
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
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="#" className="nav-link">
                  Search
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/FAQ" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <div className="topnav">
              <input
                className="nav-item"
                type="text"
                placeholder="Search.."
              ></input>
            </div> */}

            <div className="navbar-buttons d-flex justify-content-end">
              <Dropdown>
                <DropdownButton id="dropdown-item-button" title="Categories">
                  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
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
