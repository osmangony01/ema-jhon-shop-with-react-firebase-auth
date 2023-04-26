import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (user) {
        return children;
    }

    if (loading) {
        return <div>Loading...</div>
    }
    return <Navigate to="/login" replace={true} />
};

export default PrivateRoute;