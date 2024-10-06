import styles from  './App.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.appContainer}>
        <Header></Header>
        
        <div className={styles.filler}></div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
