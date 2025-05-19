// src/components/UnauthenticatedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

/**
 * Wraps routes that should only be accessible when NOT authenticated.
 * If a token exists, redirects to /dashboard immediately.
 */
export default function UnauthenticatedRoute({ children }) {
  const { token } = useContext(AuthContext);
  return !token ? children : <Navigate to="/dashboard" replace />;
}