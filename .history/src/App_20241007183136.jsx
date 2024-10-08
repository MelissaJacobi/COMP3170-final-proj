import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';
import Menu from './pages/Menu';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
      <Header />
      <Routes>

        <Route path="/Home" element={<Home/>} />

        <Route path="/menu" element={<Menu />} />

      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
