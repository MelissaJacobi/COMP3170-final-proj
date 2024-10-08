import Carousel from './components/Carousel';
import Vision from './components/Vision';
import MenuGallery from './components/MenuGallery';


function App() {
  return (
          <>
            <Carousel />
            <div className={styles.filler}></div>
            <Vision />
            <MenuGallery />
          </>
  )
}
export default App;