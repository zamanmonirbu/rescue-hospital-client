// AdminPrivateRoutes.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { apiContext } from '../../App';
import { isAdminAuthenticated } from '../../Auth/AdminAuth';

const AdminPrivateRoutes = () => {
  const [verifyUser] = useContext(apiContext);
  const isAuthenticated = isAdminAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoutes;
