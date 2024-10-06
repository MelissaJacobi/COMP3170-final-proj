import './Header.css'
import logo from "../assets/images/logo.png"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from '../pages/Menu';

export default function Header() {

  return (
    <>
      <div className='container'>
        <div>
            <img src={logo} alt="Logo" className='logo'/>
            <p className='siteTitle'>Exutoir</p> 
        </div>
        <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/Menu">Home</Link></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </main>
    </Router>
      </div>
    </>
  )
}

