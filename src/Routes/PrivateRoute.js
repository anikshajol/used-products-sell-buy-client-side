import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SecondorySpinner from "../Components/Spinner/SecondorySpinner";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <SecondorySpinner></SecondorySpinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
