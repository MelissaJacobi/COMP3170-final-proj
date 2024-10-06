import logo from "../assets/images/logo.png"
import styles from "./Footer.module.css"

export default function Footer() {

  return (
    <>
      <div className={styles.container}>
        <div>
            <p className={styles.siteTitle}>Exutoir</p>
            <img src={logo} alt="Logo" className={styles.logo}/>           
        </div>
        <ul>
          <p>Products</p>
          <li>Store Menu</li>
          <li>Order Menu</li>
          <li>Shop</li>
        </ul>
        <ul>
          <p>Products</p>
          <li>Store Menu</li>
          <li>Order Menu</li>
          <li>Shop</li>
        </ul>
      </div>
    </>
  )
}
