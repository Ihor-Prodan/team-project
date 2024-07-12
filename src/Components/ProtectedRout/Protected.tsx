import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setIsModal } from '../Redux/Slices/Modal';

const ProtectedRoute: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  if (!currentUser) {
    dispatch(setIsModal(true));

    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
