import React, { Component } from "react";

//css
import "./../scss/components/NotFound.scss";

//packages
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container not-found">
          <span className="oops h1">404</span>
          <h1 className="h1">Oops!</h1>
          <h1 className="h1">Not Found Page!</h1>
          <button variant="none">
            <NavLink className="nav-link" to="/">
              Back to Home Page
            </NavLink>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
