// src/pages/Home.jsx

import styles from './Home.module.css';
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
