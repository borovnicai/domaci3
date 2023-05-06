import './Navbar.styles.css'
import { Link } from "react-router-dom";
import mainLogo from '../assets/pokeball-lg.png'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo-wrap">
          <img src={mainLogo} alt="Pokeball"/>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar