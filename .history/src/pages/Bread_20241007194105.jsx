import Product from "../components/product";

export default function Bread() {
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
            <h1>Menu</h1>
        </div>
        <Product />
      </div>
    );
  }