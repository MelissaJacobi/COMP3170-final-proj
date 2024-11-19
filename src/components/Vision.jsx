import styles from  './Vision.module.css';
import VisionImg from "../assets/images/VisionImg.jpg";
import { Link, Route, Router, Routes } from 'react-router-dom';

function Vision() {

  return (
    <>
        <div className={styles.vision}>
            <div className={styles.visionText}>
                <h2>Our Vision</h2>
                <p>At Exutoire, we aspire to redefine indulgence by crafting exquisite pastries that elevate every sweet moment. Our vision is to be a destination where artful craftsmanship, opulent flavors, and impeccable service converge to set new standards in the realm of luxury. Committed to innovation and quality, we aim to make life more delicious, one delectable creation at a time. </p>
            </div>
            {/* <Link className={styles.link} to="/">Learn More</Link> */}
            <div className={styles.visionPic}>
                <img src={VisionImg} alt="Vision" className={styles.visionImg}/>
            </div>
        </div>
    </>
  )
}

export default Vision
