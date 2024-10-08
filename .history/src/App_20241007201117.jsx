// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/menu';
import Bread from './pages/Bread'; // Import Bread component

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/bread" element={<Bread />} />
          <Route path="/menu/pastries" element={<Bread />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
