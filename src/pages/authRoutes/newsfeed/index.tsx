import React from "react";
import ProtectedRoute from "../../../hoc/protectedRoute";

const Newsfeed = () => {
    return (
        <h1>Newsfeed</h1>
    )
}

export default ProtectedRoute(Newsfeed, true);