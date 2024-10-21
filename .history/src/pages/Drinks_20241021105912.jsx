import Product from "../components/Product";
import styles from "./Bread.module.css"

export default function Drinks() {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
            <h1>Pastries</h1>
        </div>
        <div className={styles.products}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
        
      </div>
    );
  }