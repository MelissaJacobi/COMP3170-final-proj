// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';
import Menu from './pages/menu'; // Import the Menu page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Route with your current content */}
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

        {/* Menu Route */}
        <Route path="/menu" element={<Menu />} />

        {/* Other routes can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
