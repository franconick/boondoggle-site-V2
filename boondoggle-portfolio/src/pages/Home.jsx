import './Home.css'
import backgroundImage from '../assets/BDbackgroundHOMEnooverlay.png'
import boonChar from '../assets/booncharBLUE.png'
import overlayImage from '../assets/BDbackgroundHOMEoverlay.png'
import LinkButton from '../components/link-button/LinkButton.jsx'
import Nav from '../components/Nav.jsx'

function Home(){
    return( 
        
        <div className="home-container">
            <Nav></Nav>
            <div className="background-image">
                <img src={backgroundImage} alt="background" />
            </div>

            <div className="character-image">
                <img src={boonChar} alt="boondoggle character" />
            </div>
            <div className="overlay-image">
                <img src={overlayImage} alt="overlay" />
            </div>
            <h1 className="title-text">BOONDOGGLE</h1>
            <div className="button-container">
                <LinkButton text="View work" />
            </div>
        </div>
    );
}
export default Home;