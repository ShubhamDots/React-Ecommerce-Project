// Required Dependancies

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

// show the Header Section
function Header() {
  return (
    <Fragment>
      <nav className="navbar row" id="navbar" style={{ alignItem: "center" }}>
        <div className="col-12 col-md-3">
          <div id="headerlogo">
            <Link to="/home">
              <img src={"assets/logo/logo.png"} alt="" />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Enter Product Name"
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true">
                  <FaSearch />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/login">
            <button id="login_btn">Login</button>
          </Link>
          <Link to="/">
            <button id="login_btn">Sign-up</button>
          </Link>
          <Link to="/cart">
            {" "}
            <img src={"assets/images/ca.png"} height="40" alt="" />
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
