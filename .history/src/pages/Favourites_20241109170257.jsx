import styles from "./Favourites.module.css";
import FavouritesCard from "../components/FavouritesCard";
import favouritesbanner from "../assets/images/favouritesbanner.jpg";

export default function Favourites() {
    return(
        <>
            <div className={styles.favouritesContainer}>
                <div className={styles.banner}>
                    <img src={favouritesbanner} alt="tiramisu cake banner"/>
                    <h1>Favourites</h1>
                </div>
                <div className={styles.favouriteProducts}>
                    <FavouritesCard />
                    <FavouritesCard />
                    <FavouritesCard />
                </div>
            </div>
        </>
    )
}