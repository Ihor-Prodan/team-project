import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setIsModal } from '../Redux/Slices/Modal';

const ProtectedRoute: React.FC = () => {
  const token = useAppSelector(state => state.user.token);
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token && !currentUser) {
      dispatch(setIsModal(true));
    }
  }, [currentUser, token, dispatch]);

  if (!token && !currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
