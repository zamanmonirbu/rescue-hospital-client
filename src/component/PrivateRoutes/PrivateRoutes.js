import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiContext } from '../../App';


const PrivateRoutes = (props) => {

    const { Component } = props;
    const navigation = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('drLogin')
        if (!login) {
            navigation('/login')
        }
    });

    const [user]= useContext(apiContext)
    return (
        <div>
            <p>DisplayName{user.displayName}</p>
            <Component />
        </div>
    );
};

export default PrivateRoutes;