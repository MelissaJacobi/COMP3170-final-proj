import styles from  './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Vision from './components/Vision'

function App() {

  return (
    <>
      <Carousel></Carousel>
      <div className={styles.appContainer}>
        <Header></Header>
        <div className={styles.filler}></div>
        <Vision></Vision>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
