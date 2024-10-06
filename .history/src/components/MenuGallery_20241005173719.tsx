import styles from  './MenuGallery.module.css'


export default function MenuGallery() {

  return (
    <>
    <div  className={styles.container}>
        <h2>Menu</h2>
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <p>Bread</p>
            </div>
        </div>
    </div>
        
    </>
  )
}
