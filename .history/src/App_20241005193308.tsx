// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';
import Menu from './pages/menu';
function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={
          <>
            <Carousel />
            <div className={styles.appContainer}>
              <div className={styles.filler}></div>
              <Vision />
              <MenuGallery />
            </div>
          </>
        } />

        <Route path="/menu" element={<Menu />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
