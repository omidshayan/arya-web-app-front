import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from 'your-auth-context'; // مسیر کانتکست لاگین

const PrivateRoute = ({ element, ...props }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...props}
      element={isLoggedIn ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
