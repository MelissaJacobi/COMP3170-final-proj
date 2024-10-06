import styles from "./Carousel.module.css"
import banner from "../assets/images/banner.jpg"

function Carousel() {

  return (
    <>
        <h1 className={styles.header}>Exutoir</h1>
        <img src={banner} alt="banner image" className={styles.banner}></img>
    </>
  )
}

export default Carousel