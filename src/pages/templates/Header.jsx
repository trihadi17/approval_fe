import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="topnav">
      <div className="topbar-main">
        <div className="container-fluid">
          <div className="logo">
            <Link to="/" className="logo">
              <img
                src="/assets/images/logo-sm.png"
                alt=""
                height="26"
                className="logo-small"
              />
              <img
                src="/assets/images/logo.png"
                alt=""
                height="24"
                className="logo-large"
              />
            </Link>
          </div>

          <div className="menu-extras topbar-custom">
            <ul className="list-unstyled topbar-right-menu float-right mb-0">
              <li className="notification-list d-flex align-items-center">
                <Link
                  className="nav-link waves-effect waves-light nav-user"
                  to=""
                >
                  <img
                    src="/assets/images/users/avatar-1.jpg"
                    alt="user"
                    className="rounded-circle"
                  />
                </Link>
                <div>
                  <Link to="/login" className="btn btn-sm btn-danger rounded">
                    Sign Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>

      <div className="navbar-custom">
        <div className="container-fluid">
          <div id="navigation">
            <ul className="navigation-menu">
              <li className="has-submenu">
                <Link to="/">
                  <i className="fa fa-users"></i>
                  <span> Users </span>
                </Link>
              </li>
              <li className="has-submenu">
                <Link to="/permission">
                  <i className="fa fa-wpforms"></i> <span> Permissions </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
