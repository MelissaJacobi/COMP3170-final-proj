import styles from "./Favourites.module.css";
import FavouritesCard from "../components/FavouritesCard";
import favouritesbanner from "../assets/images/favouritesbanner.jpg";

export default function Favourites() {
    // Retrieve favorite products from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    return(
        <div className={styles.favouritesContainer}>
            <div className={styles.banner}>
                <img src={favouritesbanner} alt="favourites banner" />
                <h1>Favourites</h1>
            </div>
            <div className={styles.favouriteProducts}>
                {favorites.length > 0 ? (
                    favorites.map((product, index) => (
                        <FavouritesCard 
                            key={index} 
                            name={product.name} 
                            price={product.price} 
                            description={product.description} 
                            imageUrl={product.imageUrl}
                        />
                    ))
                ) : (
                    <p>No favorite products yet!</p>
                )}
            </div>
        </div>
    );
}
