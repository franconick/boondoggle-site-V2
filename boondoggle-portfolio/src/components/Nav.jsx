import './Nav.css'
import logo from '../assets/BDlogoSMALL.png'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Boondoggle Logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/thumbnails" className="navbar-link">Thumbnails</Link>
        <Link to="/banners" className="navbar-link">Banners</Link>
        <Link to="/other" className="navbar-link">Other</Link>
        <Link to="/info" className="navbar-link">Info</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>

  );
}

export default Nav

