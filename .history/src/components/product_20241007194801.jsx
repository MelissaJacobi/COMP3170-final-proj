import styles from './Product.module.css';
import placeholder from "../assets/images/placeholder.jpg";

export default function Product() {
  return (
   <div className={styles.container}>
        <img src={placeholder} className={styles.productImg} />
   </div>
);
}