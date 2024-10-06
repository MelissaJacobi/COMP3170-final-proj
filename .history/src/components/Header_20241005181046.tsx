import styles from './Header.module.css'
import logo from "../assets/images/logo.png"
import { PiShoppingCart } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Header() {

  return (
    <>
    <Router>
      <div className={styles.container}>
        <div>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <p className={styles.siteTitle}>Exutoire</p>
        </div>
        <Routes>
          <Route path="/" className={styles.links}>Home</Route>
          <Route path="/menu" className={styles.links} href='./pages/menu'>Menu</Route>
          <a className={styles.links}>Order</a>
        </Routes>
        
        <div>
          <PiShoppingCart className={styles.icon}/>
          <VscAccount className={styles.icon}/>
        </div>
      </div>
    </Router>
      
    </>
  )
}

