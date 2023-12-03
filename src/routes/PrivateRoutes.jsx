import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PrivateRouteForUser = ({ children }) => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();
    if(user) {
        return children
    } else {
        navigate('/login')
    }
}

export const PrivateRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('user'))
    if(admin.user.email === 'sabbirholybangla@gmail.com') {
        return children
    } else {
        navigate('/login')
    }
}