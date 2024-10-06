import logo from "../assets/images/logo.png"
import styles from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

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
          <p>Follow us</p>
          <li><FaFacebookSquare className={styles.socialIcon}/>Facebook</li>
          <li><FaSquareXTwitter className={styles.socialIcon}/>Twitter</li>
          <li><FaInstagramSquare className={styles.socialIcon}/>Instagram</li>
        </ul>
        <ul>
          <p>Contact us</p>
          <li><SlPhone  className={styles.socialIcon}/>604-123-1234</li>
          <li><MdOutlineMailOutline className={styles.socialIcon}/>exutoirebakery@gmail.com</li>
          <li><MdOutlineLocationOn className={styles.socialIcon}/>#13-1329 Bakery Rd, V5R 1N3</li>
        </ul>
        <div>
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
      </div>
    </>
  )
}
