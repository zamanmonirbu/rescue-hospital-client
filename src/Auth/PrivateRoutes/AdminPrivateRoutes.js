import React, { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { apiContext } from "../../App";

const AdminPrivateRoutes = () => {
  const location = useLocation();
  const [verifyUser]= useContext(apiContext);

  // const verifyAdmin = true;
console.log("hello",verifyUser)
  return (
    <div>
      {verifyUser?.isAdmin ? (
        <Outlet />
      ) : (
        <Navigate to="/admin/login" state={{ prevUrl: location.pathname }} />
      )}
    </div>
  );
};

export default AdminPrivateRoutes;
