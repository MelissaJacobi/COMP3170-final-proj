import styles from "./Carousel.module.css";
import banner from "../assets/images/banner.jpg";

function Carousel() {
  return (
    <>
      <h1 className={styles.header}>Exutoir</h1>
      <div className={styles.imageContainer}>
        <img src={banner} alt="banner image" className={styles.banner} />
        <div className={styles.overlay}></div>
      </div>
    </>
  );
}

export default Carousel;
