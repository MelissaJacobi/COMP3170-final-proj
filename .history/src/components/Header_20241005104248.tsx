import './Header.css'
import logo from "../assets/images/logo.png"
import { PiShoppingCartLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export default function Header() {

  return (
    <>
      <div className='container'>
        <div>
            <img src={logo} alt="Logo" className='logo'/>
            <p className='siteTitle'>Exutoir</p>
        </div>
        <a className='links'>Home</a>
        <a className='links'>Menu</a>
        <a className='links'>Order</a>
        <div>
          <PiShoppingCartLight />
          <CgProfile />
        </div>
      </div>
    </>
  )
}

