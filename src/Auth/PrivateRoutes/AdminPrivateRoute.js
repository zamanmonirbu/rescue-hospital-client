import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const AdminPrivateRoutes = () => {
  const location = useLocation();
  const verifyAdmin = "";

  return (
    <div>
      {verifyAdmin ? (
        <Outlet />
      ) : (
        <Navigate to="/admin/login" state={{ prevUrl: location.pathname }} />
      )}
    </div>
  );
};

export default AdminPrivateRoutes;
