import './video-card.css'

function VideoCard({videoTitle,thumbnailImage,channelName,channelImage,viewCount,videoLink}){
    return(
        <div className='card'>
            <a href={videoLink} target="_blank" style={{ textDecoration: 'none' }}>
            <div className='card-container'>
            <div className='thumbnail-image'>
                <img src={thumbnailImage} alt="thumbnail" />
            </div>
            <div className='card-info'>
                <div className='video-title'>
                    <h3>{videoTitle}</h3>
                </div>
                <div className='channel-info'>
                    <div className='channel-pfp'>
                        <img src={channelImage} alt="channel-profile-image" />
                    </div>
                    <div className='channel-name'>
                        <p>{channelName}</p>
                    </div>
                </div>
                <div className='view-count'>
                    {/*<p>{viewCount + " views"}</p>*/}
                </div>
            </div>
            </div>
        </a>
        </div>
        
    );

}

export default VideoCard