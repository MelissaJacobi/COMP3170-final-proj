import logo from "../assets/images/logo.png"
import styles from "./Footer.module.css"

export default function Footer() {

  return (
    <>
      <div className={styles.container}>
        <div>
            <p className={styles.siteTitle}>Exutoir</p>
            <img src={logo} alt="Logo" className={styles.logo}/>           
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
