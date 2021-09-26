import React from "react";
//packages
import { Route, Redirect } from "react-router-dom";

//utils
import { isLogin } from "../common";

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={(props) =>
      isLogin()
        ? <Component {...props} />
        : <Redirect to="/" />
    }
    />
  );
};

export default PrivateRoute;
