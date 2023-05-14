import React from 'react';
 
const NavBar = ({ totalCounters }) => {
  return (
      <nav className="navbar navbar-dark bg-dark">
          <div style={{ fontSize: "32px" }}>
              {" Total "}
              <span className="badge rounded-pill bg-secondary">
                  {totalCounters}
              </span>
          </div>
          <a href="https://react.dev">
              <img
                  src="favicon.ico"
                  style={{ height: "48px" }}
                  alt="logo"
              />
          </a>
          <a href="https://getbootstrap.com">
              <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                  style={{ height: "48px" }}
                  alt="logo"
              />
          </a>
      </nav>
  );
};


export default NavBar;