import styles from "./FavouritesCard.module.css";

export default function FavouritesCard({ name, price, description, imageUrl, onRemove }) {
    return (
        <div className={styles.favouritesCardContainer}>
            <button className={styles.removeBtn} onClick={onRemove}>&#10005;</button>
            <img src={imageUrl || placeholder} alt={name || "Product"} />
            <div className={styles.texts}>
                <h3>{name || "Product Name"}</h3>
                <p>{description || "Description"}</p>
                <p>{price ? `$${price}` : "$0.00"}</p>
            </div>
        </div>
    );
}
