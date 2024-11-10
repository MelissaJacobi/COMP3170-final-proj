import Product from "../components/Product";
import styles from "./Pastries.module.css";

export default function Pastries({ products }) {
  const pastries = products.filter(product => product.category === 'pastries');

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
          <h1>Pastries</h1>
      </div>
      <div className={styles.products}>
        {pastries.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}
