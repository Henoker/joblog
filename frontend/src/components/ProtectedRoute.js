import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, auth }) => {
  if (auth) {
    return <Route element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
