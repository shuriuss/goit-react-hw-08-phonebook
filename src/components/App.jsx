/* eslint-disable no-dupe-class-members */
import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';

import s from './App.module.css';
import Contacts from './Pages/Contacts';
import Login from './Pages/Login';
import Register from './Pages/Register';

export function App() {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  return (
    <div>
      <header>
        <nav>
          <NavLink className={getActiveClassName} to="/">
            Register
          </NavLink>
          <NavLink className={getActiveClassName} to="/login">
            Login
          </NavLink>
          {token && (
            <NavLink className={getActiveClassName} to="/contacts">
              Contacts
            </NavLink>
          )}
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}
