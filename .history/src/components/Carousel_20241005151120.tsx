import styles from "./Carousel.module.css"
import banner from "../assets/images/banner.jpg"

function Carousel() {

  return (
    <>
        <h1 className={styles.header}>Exutoire</h1>
        <p className={styles.subtitle}>Bakery</p>
        <img src={banner} alt="banner image" className={styles.banner}></img>
    </>
  )
}

export default Carousel