import styles from  './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Vision from './components/Vision'
import MenuGallery from './components/MenuGallery'

function App() {

  return (
    <>
      <Carousel></Carousel>
      <div className={styles.appContainer}>
        <Header></Header>
        <div className={styles.filler}></div>
        <Vision></Vision>
        <MenuGallery></MenuGallery>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
