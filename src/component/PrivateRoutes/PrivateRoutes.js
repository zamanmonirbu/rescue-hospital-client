import React, { useContext } from 'react';
import { apiContext } from '../../App';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
    const [verifyUser,setVerifyUser] = useContext(apiContext);
    const location=useLocation();
    console.log("Hello",verifyUser.displayName);
    return (
        <div>
            {
                    verifyUser?.displayName? (
                        <Outlet />
                    ):(
                        <Navigate to='/create/user' replace state={{from:location}} />
                    )
            }
        </div>
    );
};

export default PrivateRoutes;