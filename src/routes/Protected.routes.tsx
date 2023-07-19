import React, { useContext } from 'react'
import { AppContext } from '../assets/contexts/App.context'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {

    const { token } = useContext(AppContext);

  return !!token ? <Outlet /> : <Navigate to = {'/login'} />
}
