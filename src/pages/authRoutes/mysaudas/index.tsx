import React from "react";
import ProtectedRoute from '../../../hoc/protectedRoute';

const MySaudas = () => {
    return (
        <h1>My Saudas</h1>
    )
}

export default ProtectedRoute(MySaudas, true);