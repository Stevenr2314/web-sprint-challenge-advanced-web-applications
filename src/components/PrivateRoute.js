import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => 
  <Route {...rest} render={
    props => localStorage.getItem('token') ? (
      <Component {...props} />
    ):(
      <Redirect to='/login' />
  )} />

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute