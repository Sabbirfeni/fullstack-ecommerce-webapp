import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const PrivateRouteForUser = ({ children }) => {
    const user = localStorage.getItem('user');
    if(user) {
        return children
    } else {
        return <Navigate to='/login'/>
    }
}

export const PrivateRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem('user'))
    if(admin?.user?.email === 'sabbirholybangla@gmail.com') {
        return children
    } else {
        return <Navigate to='/login'/>
    }
}