import React from "react";
import ProtectedRoute from '../../../hoc/protectedRoute';

const Trades = () => {
    return (
        <h1>Trades</h1>
    )
}

export default ProtectedRoute(Trades, true);