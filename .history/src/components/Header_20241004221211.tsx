import './Header.css'
import logo from "../assets/images/logo.png"

export default function Header() {

  return (
    <>
      <div className='container'>
        <img src={logo} alt="Logo" className='logo'/>
        <p className='siteTitle'>Exutoir</p>
      </div>
    </>
  )
}

