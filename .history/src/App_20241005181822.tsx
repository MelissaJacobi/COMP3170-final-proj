// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home route containing your existing content */}
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

        {/* Other routes */}
        <Route path="/menu" element={<MenuGallery />} />
        <Route path="/order" element={<div>Order Page</div>} /> {/* Replace with your Order component when ready */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
