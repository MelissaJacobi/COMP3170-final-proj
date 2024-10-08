// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/menu';
import Bread from './pages/Bread';
import Pastries from './pages/Pastries';
import Cakes from './pages/Cakes';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/bread" element={<Bread />} />
          <Route path="/menu/pastries" element={<Pastries />} />
          <Route path="/menu/cakes" element={<Cakes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
