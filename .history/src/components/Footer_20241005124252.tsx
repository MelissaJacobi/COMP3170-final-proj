import logo from "../assets/images/logo.png"
import styles from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

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
          <li><AiFillInstagram className={styles.socialIcon}/>Instagram</li>
        </ul>
      </div>
    </>
  )
}
