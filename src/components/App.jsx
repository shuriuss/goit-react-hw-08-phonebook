/* eslint-disable no-dupe-class-members */
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Contacts from './Pages/Contacts';
import Login from './Pages/Login';
import Register from './Pages/Register';

export function App() {
 

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Register/>} />
          {/* <Route index element={<Register/>} /> */}
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </>
  );
}
