import './Thumbnails.css'
import Nav from '../components/Nav';
import ThumbnailContainer from '../components/thumbnail-container/thumbnail-container.jsx'
import VideoCard from '../components/video-card/video-card.jsx';
function Thumbnails(){
    // Helper function to get image URL from assets folder
    const getImageUrl = (imageName) => {
        return new URL(`../assets/thumbnails/${imageName}`, import.meta.url).href
    }

    return(
        <div className='thumbnails-page'>
            <div className='nav-area'>
                <Nav/>
            </div>
            <div className='thumbnails-page-container'>
                <ThumbnailContainer 
                image1={getImageUrl('mobgojo1.webp')} 
                image2={getImageUrl('mobgojo3.webp')}
                image3={getImageUrl('mobgojo6.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('mobgojo7.webp')} 
                image2={getImageUrl('mobgojo8.webp')}
                image3={getImageUrl('mobgojo9.webp')}/>
                <div className='thumbnail-card'>
                    <VideoCard/>
                </div>
                <ThumbnailContainer 
                image1={getImageUrl('obsidianshinobi9.webp')} 
                image2={getImageUrl('Obsidianshinobi14.webp')}
                image3={getImageUrl('Obsidianshinobi8.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('steelstrife4.webp')} 
                image2={getImageUrl('steelstrife5.webp')}
                image3={getImageUrl('steelstrife6.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('bill2.webp')} 
                image2={getImageUrl('bwhere2.webp')}
                image3={getImageUrl('flossy2.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('infernasu1.webp')} 
                image2={getImageUrl('infernasu2V2.webp')}
                image3={getImageUrl('infernasu4.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('kage11BLACK.webp')} 
                image2={getImageUrl('kage13.webp')}
                image3={getImageUrl('kage14.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('kage17.webp')} 
                image2={getImageUrl('kamon14.webp')}
                image3={getImageUrl('Kamon15.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('obsidianshinobi10.webp')} 
                image2={getImageUrl('obsidianshinobi15.webp')}
                image3={getImageUrl('kage9.webp')}/>
            </div>
        </div>
    );
}

export default Thumbnails;