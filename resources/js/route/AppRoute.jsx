import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Courseplan from '../pages/Courseplan';
import Freeclass from '../pages/Freeclass';
import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Menu from '../components/menu';
import Footer from '../components/Footer';
import Login from '../pages/Login';

export default function AppRoute() {
  return (
    <BrowserRouter>
    <Menu />
       <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/courseplan' element={<Courseplan />} /> 
        <Route exact path='/registration' element={<Registration />} /> 
        <Route exact path='/freeclass' element={<Freeclass />} /> 
        <Route exact path='/login' element={<Login />} /> 
       </Routes>
       <Footer />
    </BrowserRouter>
  )
}
