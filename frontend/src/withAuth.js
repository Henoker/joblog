import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component, isAuthenticated) => {
  return (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
};

export default withAuth;
