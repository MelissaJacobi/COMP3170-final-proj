import logo from "../assets/images/logo.png"
import './Footer.css'

export default function Footer() {

  return (
    <>
      <div className='container'>
        <div>
            <p className='siteTitle'>Exutoir</p>
            <img src={logo} alt="Logo" className='logo'/>           
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
