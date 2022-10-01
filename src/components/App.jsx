import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { PrivateRoute } from 'redux/auth/PrivateRoute';
import { RestrictedRoute } from 'redux/auth/RestrictedRoute';
import Header from './Header';
import Contacts from './Pages/Contacts';
import Login from './Pages/Login';
import Register from './Pages/Register';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Routes>
      </div>
    </>
  );
}
