import './Header.css'
import logo from "../assets/images/logo.png"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function Header() {

  return (
    <>
      <div className='container'>
        <div>
           <img src={logo} alt="Logo" className='logo'/>
            <p className='siteTitle'>Exutoir</p> 
        </div>
        
      </div>
    </>
  )
}

