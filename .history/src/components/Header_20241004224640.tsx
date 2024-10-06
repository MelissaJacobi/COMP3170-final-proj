import './Header.css'
import logo from "../assets/images/logo.png"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from '../pages/menu';

export default function Header() {

  return (
    <>
      <div className='container'>
        <div>
            <img src={logo} alt="Logo" className='logo'/>
            <p className='siteTitle'>Exutoir</p> 
        </div>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/Menu">Menu</Link></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <Routes>
              <Route path="/Menu" element={<Menu />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

