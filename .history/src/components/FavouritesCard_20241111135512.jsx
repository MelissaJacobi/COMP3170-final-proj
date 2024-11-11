import styles from "./FavouritesCard.module.css";
import placeholder from "../assets/images/placeholder.jpg";

// Handle removing the product from favorites
export default function FavouritesCard({ name, price, description, imageUrl, index, removeFavorite }) {
    const handleRemove = () => {
        removeFavorite(index); // Remove the product by index
    };

    return (
        <div className={styles.favouritesCardContainer}>
            <button className={styles.removeBtn} onClick={handleRemove}>&#10005;</button>
            <img src={imageUrl || placeholder} alt={name || "Product"} />
            <div className={styles.texts}>
                <h3>{name || "Product Name"}</h3>
                <p>{description || "Description"}</p>
                <p>{price ? `$${price}` : "$0.00"}</p>
            </div>
        </div>
    );
}
