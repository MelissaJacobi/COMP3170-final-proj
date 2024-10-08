import Product from "../components/product";
import styles from "./Bread.module.css"

export default function Bread() {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
            <h1>Bread</h1>
        </div>
        <div className={styles.products}>

        </div>
        <Product />
      </div>
    );
  }