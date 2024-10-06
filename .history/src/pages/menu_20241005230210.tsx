import styles from './Menu.module.css'

export default function Menu() {

  return (
    <>
    <div className={styles.container}>
        <div className={styles.banner}>
          <h1>Menu</h1>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <div></div>
            <h2>Bread</h2>
          </div>
        </div>
    </div>
      
    </>
  )
}
