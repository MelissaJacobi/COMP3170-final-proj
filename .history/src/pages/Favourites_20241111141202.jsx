import { useState, useEffect } from "react";
import styles from "./Favourites.module.css";
import FavouritesCard from "../components/FavouritesCard";
import favouritesbanner from "../assets/images/favouritesbanner.jpg";

export default function Favourites() {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const removeFromFavorites = (index) => {
        const updatedFavorites = favorites.filter((_, i) => i !== index);
        setFavorites(updatedFavorites); 
    };

    return (
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
                            onRemove={() => removeFromFavorites(index)}
                        />
                    ))
                ) : (
                    <p>No favorite products yet!</p>
                )}
            </div>
        </div>
    );
}
