import { useNavigate } from 'react-router-dom'; 
import styles from './MenuGallery.module.css'; 
import pastry from '../assets/images/pastry.jpg'; 
import bread from '../assets/images/bread.jpg'; 
import cake from '../assets/images/cake.jpg'; 
import drinks from '../assets/images/drinks.jpg'; 
import giftcard from '../assets/images/giftcard.png'; 
import seasonal from '../assets/images/seasonal.jpg'; 

export default function MenuGallery() {
  const navigate = useNavigate(); 

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase()}`); 
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Menu</h2>
        <div className={styles.gallery}>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/bread')} 
          >
            <p>Bread</p>
            <img src={bread} alt="bread" />
          </div>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/pastries')} 
          >
            <p>Pastries</p>
            <img src={pastry} alt="pastry" />
          </div>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/cakes')} 
          >
            <p>Cakes</p>
            <img src={cake} alt="cake" />
          </div>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/drinks')} 
          >
            <p>Drinks</p>
            <img src={drinks} alt="cup of coffee" />
          </div>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/giftcards')} 
          >
            <p>Gift Cards</p>
            <img src={giftcard} alt="gift card" />
          </div>
          <div
            className={styles.galleryItem}
            onClick={() => handleNavigation('menu/seasonal')}
          >
            <p>Seasonal</p>
            <img src={seasonal} alt="reindeer cake" />
          </div>
        </div>
        <button
          className={styles.button}
          onClick={() => handleNavigation('menu')} 
        >
          More
        </button>
      </div>
    </>
  );
}
