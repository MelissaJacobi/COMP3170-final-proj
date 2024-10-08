import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
      <Header />
      <Routes>

        <Route path="/" element={
          <>
            <Carousel />
            
              <div className={styles.filler}></div>
              <Vision />
              <MenuGallery />
            
          </>
        } />

        <Route path="/menu" element={<Menu />} />

      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;