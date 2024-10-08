import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>Menu</h1>
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <Link to="/menu/bread">
            <div></div>
            <h2>Bread</h2>
          </Link>
        </div>
        <div className={styles.option}>
          <div></div>
          <h2>Pastries</h2>
        </div>
        <div className={styles.option}>
          <div></div>
          <h2>Cakes</h2>
        </div>
        <div className={styles.option}>
          <div></div>
          <h2>Drinks</h2>
        </div>
        <div className={styles.option}>
          <div></div>
          <h2>Seasonal</h2>
        </div>
      </div>
    </div>
  );
}
