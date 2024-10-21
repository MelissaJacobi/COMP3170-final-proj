import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";
import Heart from "../assets/images/Heart.svg"; 

export default function Product() {
  return (
   <div className={styles.container}>
        <img src={placeholder} className={styles.productImg} />
        <img src={Heart} className={styles.heartIcon}/>
        <p className={styles.productName}>Product Name</p>
        <div className={styles.infoAndCart}>
            <p>$0.00</p>
            <PiShoppingCart className={styles.icon} />
        </div>
   </div>
);
}