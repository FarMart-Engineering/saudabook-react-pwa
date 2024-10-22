import React from 'react';
import ProtectedRoute from '../../../hoc/protectedRoute';

const Home = () => {
  return (
    <h1>Homescreen</h1>
  )
}

export default ProtectedRoute(Home, true);