import styles from "./Carousel.module.css"
import carousel from "../assets/images/carousel.png"

function Carousel() {

  return (
    <>
        <h1 className={`${styles.header} fraunces`}>EXUTOIRE</h1>
        <p className={styles.subtitle}>Bakery</p>
        <img src={carousel} alt="banner image" className={styles.banner}></img>
    </>
  )
}

export default Carousel