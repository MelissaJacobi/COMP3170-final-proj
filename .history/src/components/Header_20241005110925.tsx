import styles from './Header.module.css'
import logo from "../assets/images/logo.png"
import { PiShoppingCart } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

export default function Header() {

  return (
    <>
      <div className={styles.container}>
        <div>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <p className={styles.siteTitle}>Exutoir</p>
        </div>
        <a className={styles.links}>Home</a>
        <a className={styles.links}>Menu</a>
        <a className={styles.links}>Order</a>
        <div>
          <PiShoppingCart className={styles.icon}/>
          <VscAccount className={styles.icon}/>
        </div>
      </div>
    </>
  )
}

