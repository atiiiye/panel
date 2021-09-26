import React from 'react';

//packages
import { Route, Redirect } from 'react-router-dom';

//utils
import { isLogin } from '../common';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        // restricted = false meaning public route 
        // restricted = true meaning restricted route

        <Route {...rest} render={props => (
            isLogin() && restricted
                ? <Redirect to="/signup" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;