import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const isAuthenticated = !!localStorage.getItem('token');

  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
