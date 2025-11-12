import './Home.css'
import Header from '../components/Header/header.jsx'
import backgroundImage from '../assets/BDbackgroundHOMEnooverlay.png'
import boonChar from '../assets/booncharBLUE.png'
import overlay from '../assets/BDbackgroundHOMEoverlay.png'
function Home(){
    return( 
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div>
                <Header/>
            </div>
            <div className="home-content">
                <div className="character-image">
                    <img src={boonChar} alt="boondoggle character" />
                </div>
                <div className='background-overlay'>
                    <img src={overlay} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Home;