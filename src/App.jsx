import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/menu';
import Bread from './pages/Bread';
import Pastries from './pages/Pastries';
import Cakes from './pages/Cakes';
import Drinks from './pages/Drinks';
import Seasonal from './pages/Seasonal';
import OrderPickUp from './pages/OrderPickUp';
import OrderDelivery from './pages/OrderDelivery';

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
          <Route path="/menu/drinks" element={<Drinks />} />
          <Route path="/menu/seasonal" element={<Seasonal />} />
          <Route path="/orderpickup" element={<OrderPickUp />} />
          <Route path="/orderdelivery" element={<OrderDelivery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
