import React from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [token] = localStorage.getItem('accessToken')
    const navigate = useNavigate()
    if (!token) {
        navigate('/login')
    }
    return children
};

export default RequireAuth;