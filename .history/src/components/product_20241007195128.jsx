import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";
import { PiShoppingCart } from "react-icons/pi";

export default function Product() {
  return (
   <div className={styles.container}>
        <img src={placeholder} className={styles.productImg} />
        <p>Product Name</p>
        <div className={styles.infoAndCart}>
            
        </div>
   </div>
);
}