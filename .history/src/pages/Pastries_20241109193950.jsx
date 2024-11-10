import Product from "../components/Product";
import styles from "./Bread.module.css";

export default function Pastries({ products }) {
  const pastries = products.filter(product => product.category === 'pastries');

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
          <h1>Pastries</h1>
      </div>
      <div className={styles.products}>
        {pastries.length > 0 ? (
          pastries.map((product, index) => (
            <Product key={index} data={product} />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}
