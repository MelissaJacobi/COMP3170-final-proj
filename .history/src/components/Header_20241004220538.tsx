import './Header.css'
import logo from "../logo.png"

export default function Header() {

  return (
    <>
      <div className='container'>
        <img src={logo} alt="Logo" />
      </div>
    </>
  )
}

