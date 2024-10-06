// Header.tsx
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from "../assets/images/logo.png";
import { PiShoppingCart } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="Logo" className={styles.logo} />
        <p className={styles.siteTitle}>Exutoire</p>
      </div>
      <Link to="/" className={styles.links}>Home</Link>
      <Link to="./pages/menu" className={styles.links}>Menu</Link>
      <Link to="/order" className={styles.links}>Order</Link>
      <div>
        <PiShoppingCart className={styles.icon} />
        <VscAccount className={styles.icon} />
      </div>
    </div>
  );
}
