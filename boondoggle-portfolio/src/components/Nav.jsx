import './Nav.css'
import logo from '../assets/BDlogoSMALL.png'

function Nav() {
  const handleLogoClick = () => {
    // Navigate to home - can be updated when routing is set up
    window.location.href = '/'
  }

  const handleLinkClick = (page) => {
    // Navigate to page - can be updated when routing is set up
    // For now, just prevent default and log
    console.log(`Navigate to ${page}`)
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="Boondoggle Logo" />
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link" onClick={(e) => { e.preventDefault(); handleLinkClick('thumbnails'); }}>Thumbnails</a>
        <a href="#" className="navbar-link" onClick={(e) => { e.preventDefault(); handleLinkClick('thumbnails'); }}>Banners</a>
        <a href="#" className="navbar-link" onClick={(e) => { e.preventDefault(); handleLinkClick('other'); }}>Other</a>
        <a href="#" className="navbar-link" onClick={(e) => { e.preventDefault(); handleLinkClick('info'); }}>Info</a>
        <a href="#" className="navbar-link" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>Contact</a>
      </div>
    </nav>
  )
}

export default Nav

