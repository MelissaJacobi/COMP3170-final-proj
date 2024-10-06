import './App.css'
import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <>
    <div className='appContainer'>
      <Header></Header>
    </div>
      
    </>
  )
}

export default App
