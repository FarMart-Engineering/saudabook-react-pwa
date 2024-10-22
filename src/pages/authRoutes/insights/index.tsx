import React from "react";
import ProtectedRoute from '../../../hoc/protectedRoute';

const Insights = () => {
    return (
        <h1>Insights</h1>
    )
}

export default ProtectedRoute(Insights, true);