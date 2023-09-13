import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PrivateRoutes = (props) => {

    const { Component } = props;
    const navigation = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('drLogin')
        if (!login) {
            navigation('/login')
        }
    })
    return (
        <div>
            <Component />
        </div>
    );
};

export default PrivateRoutes;