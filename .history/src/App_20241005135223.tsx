import styles from  './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.banner}></div>
        <Header></Header>
        <div className={styles.filler}></div>
        <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
