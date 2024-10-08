// src/pages/Home.jsx

import styles from './Home.module.css'; // Optionally, create a CSS module if needed
import Carousel from '../components/Carousel';
import Vision from '../components/Vision';
import MenuGallery from '../components/MenuGallery';

function Home() {
  return (
    <>
      <Carousel />
      <div className={styles.filler}></div>
      <Vision />
      <MenuGallery />
    </>
  );
}

export default Home;
