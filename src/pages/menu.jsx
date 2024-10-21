import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import menu from '../assets/images/menu.jpg'; 
import pastry from '../assets/images/pastry.jpg'; 
import bread from '../assets/images/bread.jpg'; 
import cake from '../assets/images/cake.jpg'; 
import drinks from '../assets/images/drinks.jpg'; 
import giftcard from '../assets/images/giftcard.png'; 
import seasonal from '../assets/images/seasonal.jpg'; 

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={menu} alt="bread"/>
        <h1>Menu</h1>
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <Link to="/menu/bread" className={styles.link}>
            <img src={bread} alt="bread"/>
            <h2>Bread</h2>
          </Link>
        </div>
        <div className={styles.option}>
          <Link to="/menu/pastries" className={styles.link}>
            <img src={pastry} alt="pastry"/>
            <h2>Pastries</h2>
          </Link>
        </div>
        <div className={styles.option}>
          <Link to="/menu/cakes" className={styles.link}>
            <img src={cake} alt="cake"/>
            <h2>Cakes</h2>
          </Link>
        </div>
        <div className={styles.option}>
          <Link to="/menu/drinks" className={styles.link}>
            <img src={drinks} alt="cup of coffee"/>
            <h2>Drinks</h2>
          </Link>
        </div>
        <div className={styles.option}>
          <Link to="/menu/seasonal" className={styles.link}>
            <img src={seasonal} alt="reindeer cake"/>
            <h2>Seasonal</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
