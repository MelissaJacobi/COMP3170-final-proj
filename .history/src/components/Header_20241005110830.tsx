import styles from './Header.module.css'
import logo from "../assets/images/logo.png"
import { PiShoppingCart } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

export default function Header() {

  return (
    <>
      <div className='container'>
        <div>
            <img src={logo} alt="Logo" className={styles.logo}/>
            <p className='siteTitle'>Exutoir</p>
        </div>
        <a className='links'>Home</a>
        <a className='links'>Menu</a>
        <a className='links'>Order</a>
        <div>
          <PiShoppingCart className='icon'/>
          <VscAccount className='icon'/>
        </div>
      </div>
    </>
  )
}

