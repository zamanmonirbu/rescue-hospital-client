import React, { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { apiContext } from "../../App";

const DoctorPrivateRoutes = () => {
  const location = useLocation();
  const [verifyUser] = useContext(apiContext);

  // Ensure you are checking the correct user property for authentication
  const isAuthenticated = verifyUser && verifyUser.id;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/doctor/login" state={{ prevUrl: location.pathname }} replace />
  );
};

export default DoctorPrivateRoutes;
