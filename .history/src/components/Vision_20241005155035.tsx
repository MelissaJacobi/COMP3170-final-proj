import styles from  './Vision.module.css'
import VisionImg from "../assets/images/Vision.jpg"

function Vision() {

  return (
    <>
        <div className={styles.vision}>
            <div className={styles.visionText}>
                <h2>Our Vision</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Ante blandit adipiscing ac ac nisl lectus dolor tempor. Amet massa elit elit nulla pellentesque enim. Nulla ornare risus malesuada lorem feugiat. Semper vitae felis augue dapibus. Sem malesuada sed scelerisque auctor tellus. Lectus augue eu a auctor. In a tellus id venenatis varius lectus.</p>
            </div>
            <div className={styles.visionPic}>
                <img src={VisionImg} alt="Vision" className={styles.visionImg}/>
            </div>
        </div>
    </>
  )
}

export default Vision
