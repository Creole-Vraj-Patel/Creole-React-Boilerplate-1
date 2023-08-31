import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './authGuard/PrivateRoute';
import PublicRoute from './authGuard/PublicRoute';

const AuthLayout = lazy(() => import('./layout/AuthLayout'));
const AccountLayout = lazy(() => import('./layout/AccountLayout'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/'>
            <Route index element={<Navigate to='/auth/login' />} />
            <Route
              path='/auth/*'
              element={
                <PublicRoute>
                  <AuthLayout />
                </PublicRoute>
              }
            />
            <Route
              path='/account/*'
              element={
                <PrivateRoute>
                  <AccountLayout />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='*' element={<h1>Page not found.</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
