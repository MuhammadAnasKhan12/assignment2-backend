import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from '../../pages/Signup';
import Login from "../../pages/Login";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
