import './Thumbnails.css'
import ThumbnailContainer from '../components/thumbnail-container/thumbnail-container.jsx'
import VideoCard from '../components/video-card/video-card.jsx';
function Thumbnails(){
    // Helper function to get image URL from assets folder
    const getImageUrl = (imageName) => {
        return new URL(`../assets/thumbnails/${imageName}`, import.meta.url).href
    }
    const getImagePFP = (imageName) => {
        return new URL(`../assets/pfps/${imageName}`, import.meta.url).href
    }

    return(
        <div className='thumbnails-page'>
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
                    <VideoCard
                    videoTitle={"Can The Warlords Beat Any Yonko?"}
                    thumbnailImage={getImageUrl('glocktober13fix.webp')}
                    channelName={"shadx"}
                    channelImage={getImagePFP('shadexpfp.jpg')}
                    viewCount={"123,000,000"}/>
                    <VideoCard
                    videoTitle={"Kizaru vs Big Mom is...."}
                    thumbnailImage={getImageUrl('shadx1.jpg')}
                    channelName={"shadx"}
                    channelImage={getImagePFP('shadexpfp.jpg')}
                    viewCount={"123,000,000"}/>
                </div>
                <ThumbnailContainer 
                image1={getImageUrl('obsidianshinobi9.webp')} 
                image2={getImageUrl('Obsidianshinobi14.webp')}
                image3={getImageUrl('Obsidianshinobi8.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('steelstrife4.webp')} 
                image2={getImageUrl('steelstrife5.webp')}
                image3={getImageUrl('steelstrife6.webp')}/>
                <div className='thumbnail-card'>
                    <VideoCard
                    videoTitle={"100T ASUNA VS SEN TenZ INTENSE MATCH !!! | Jett VS Reyna"}
                    thumbnailImage={getImageUrl('asuna1.jpg')}
                    channelName={"Asuna"}
                    channelImage={'https://yt3.googleusercontent.com/ytc/AIdro_mE-a8HH3AjdInNpitfz_CEtiB9UKiDT7xsWQYE_y6vHNk=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=JXu0PdV84oo'}/>
                    <VideoCard
                    videoTitle={"THIS IS WHY RANKED IS BROKEN ??? | 100T Asuna"}
                    thumbnailImage={getImageUrl('asuna2.jpg')}
                    channelName={"Asuna"}
                    channelImage={'https://yt3.googleusercontent.com/ytc/AIdro_mE-a8HH3AjdInNpitfz_CEtiB9UKiDT7xsWQYE_y6vHNk=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=4jWH2U-IBJo'}/>
                </div>
                <ThumbnailContainer 
                image1={getImageUrl('bill2.webp')} 
                image2={getImageUrl('bwhere2.webp')}
                image3={getImageUrl('flossy2.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('infernasu1.webp')} 
                image2={getImageUrl('reek2.webp')}
                image3={getImageUrl('infernasu4.webp')}/>
                <div className='thumbnail-card'>
                    <VideoCard
                    videoTitle={"These Friday Night Funkin' Meme Mods Are MASSIVE (Jeffy V3, VS Uncle Samsonite, Shortshots: MASSIVE)"}
                    thumbnailImage={getImageUrl('stanley1.jpg')}
                    channelName={"StanleyMOV Live"}
                    channelImage={'https://yt3.googleusercontent.com/Mtgkiu0sbz_QZek1EgNK7s4zkR0xjb_tHYpd_SWtvQND9SflOtPofKJiPUkQ1awK_sqZi1z58g=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=JXu0PdV84oo'}/>
                    <VideoCard
                    videoTitle={"What If Dragon ball Fighterz Was Jojo Instead?!"}
                    thumbnailImage={getImageUrl('infernasu2V2.webp')}
                    channelName={"Infernasu"}
                    channelImage={'https://yt3.googleusercontent.com/CEZ5IRhuy4keysH-KDCMdCaUeYxqKgxPPNUtfrETqDAxsZZEK88Y8MFpuF97KPhe_a3FArwtFvs=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=HAc1OPWxtjI'}/>
                </div>
                <ThumbnailContainer 
                image1={getImageUrl('kage11BLACK.webp')} 
                image2={getImageUrl('kage13.webp')}
                image3={getImageUrl('kage14.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('kage17.webp')} 
                image2={getImageUrl('kamon14.webp')}
                image3={getImageUrl('Kamon15.webp')}/>
                <div className='thumbnail-card'>
                    <VideoCard
                    videoTitle={"This Shadow of the Erdtree Boss Fight was Personal"}
                    thumbnailImage={getImageUrl('spiderbru1.jpg')}
                    channelName={"SpiderBru"}
                    channelImage={'https://yt3.googleusercontent.com/8SXkvS8wGPRDvKrEIzZIKymkVr78Ph1jVHMbLZwOw0rXNtUnsSmg3Y0e4bZfUXMu28yI96estA=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=NUAT2akraT0'}/>
                    <VideoCard
                    videoTitle={"Rellana almost made me UNINSTALL the Elden Ring DLC"}
                    thumbnailImage={getImageUrl('polarex1.jpg')}
                    channelName={"Polar Ex"}
                    channelImage={'https://yt3.googleusercontent.com/04HXxtVqEzRSw93gnst8HMKoL_t-9PssES9WxJoYhAHC10exQbwg0Idt-3FDHNHp52BjU1oX=s160-c-k-c0x00ffffff-no-rj'}
                    viewCount={"123,000,000"}
                    videoLink={'https://www.youtube.com/watch?v=-uKReHXsJbw'}/>
                </div>
                <ThumbnailContainer 
                image1={getImageUrl('obsidianshinobi10.webp')} 
                image2={getImageUrl('obsidianshinobi15.webp')}
                image3={getImageUrl('kage9.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('cullen3.webp')} 
                image2={getImageUrl('curlynaps1.webp')}
                image3={getImageUrl('kage4.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('kage5.webp')} 
                image2={getImageUrl('Kage1.webp')}
                image3={getImageUrl('kage3.webp')}/>
                <ThumbnailContainer 
                image1={getImageUrl('Vezy1.webp')} 
                image2={getImageUrl('Vezy2.webp')}
                image3={getImageUrl('skirbee4.webp')}/>
                
            </div>
        </div>
    );
}

export default Thumbnails;