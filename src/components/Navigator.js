import './Navigator.css'
import logo1 from './logo1.svg.png'
import {Link} from 'react-router-dom'

function Navigator() {
  return (
    <div className="navigator">
      <nav className="nav">
        <a href="http://www.hs-rm.de">
          <img src={logo1} alt="HS-RM Logo"/>
        </a>
        <ul>
          <li>
            <Link to="/Fihr" className="nav_link">
              FIHR Patienten Suche
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="nav_link">
              Über uns
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Navigator