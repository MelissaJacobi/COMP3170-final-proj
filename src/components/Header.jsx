// Header.tsx
import { Link, Route, Router, Routes } from 'react-router-dom';
import styles from './Header.module.css';
import logo from "../assets/images/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import OverallCart from '../pages/ShoppingCart';

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Link to ="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
        <p className={styles.siteTitle}>Exutoire</p>
      </div>
      <Link to="/" className={styles.links}>Home</Link>
      <Link to="/Menu" className={styles.links}>Menu</Link>
      <Link to="/OrderPickUp" className={styles.links}>Order</Link>
      <div>
        <Link to="/ShoppingCart">
          <PiShoppingCart className={styles.icon} />
        </Link>
        <VscAccount className={styles.icon} />
      </div>
    </div>
  );
}
