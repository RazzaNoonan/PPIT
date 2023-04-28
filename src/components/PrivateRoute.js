// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Route {...rest} />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
