import React, { useContext } from 'react';
import { apiContext } from '../../App';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const location=useLocation();
    const [user]= useContext(apiContext);

    return (
        <div>
          {
            user?<Outlet /> : <Navigate to="/user/login"  state={{ prevUrl: location.pathname }} />
          }
        </div>
    );
};

export default PrivateRoutes;