import styles from "./FavouritesCard.module.css";
import placeholder from "../assets/images/placeholder.jpg";

export default function FavouritesCard() {
    return (
        <>
            <div className={styles.favouritesCardContainer}>
                <button className={styles.removeBtn}>&#10005;</button>
                <img src={placeholder}/>
                <div className={styles.texts}>
                    <h3>Product Name</h3>
                    <p>Lorem Ipsum</p>
                    <p>$00</p>
                </div>
            </div>
        </>
    )
}