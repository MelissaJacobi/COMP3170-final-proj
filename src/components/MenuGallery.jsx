import styles from  './MenuGallery.module.css'; 
import pastry from '../assets/images/pastry.jpg'; 
import bread from '../assets/images/bread.jpg'; 
import cake from '../assets/images/cake.jpg'; 
import drinks from '../assets/images/drinks.jpg'; 
import giftcard from '../assets/images/giftcard.png'; 
import seasonal from '../assets/images/seasonal.jpg'; 


export default function MenuGallery() {

  return (
    <>
    <div  className={styles.container}>
        <h2 className={styles.heading}>Menu</h2>
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <p>Bread</p>
                <img src={bread} alt="bread"/>
            </div>
            <div className={styles.galleryItem}>
                <p>Pastries</p>
                <img src={pastry} alt="pastry"/>
            </div>
            <div className={styles.galleryItem}>
                <p>Cakes</p>
                <img src={cake} alt="cake"/>
            </div>
            <div className={styles.galleryItem}>
                <p>Drinks</p>
                <img src={drinks} alt="cup of coffee"/>
            </div>
            <div className={styles.galleryItem}>
                <p>Gift Cards</p>
                <img src={giftcard} alt="gift card"/>
            </div>
            <div className={styles.galleryItem}>
                <p>Seasonal</p>
                <img src={seasonal} alt="reindeer cake"/>
            </div>
        </div>
        <button className={styles.button}>More</button>
    </div>
        
    </>
  )
}
