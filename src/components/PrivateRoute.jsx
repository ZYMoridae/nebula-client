import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (sessionStorage.getItem('token') != undefined && sessionStorage.getItem('token') != 'null' && sessionStorage.getItem('token') != 'undefined')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />
    )} />
)

export default PrivateRoute;