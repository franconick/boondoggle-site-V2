import './video-card.css'
import axios from 'axios';
import React, {useState,useEffect} from 'react';


function VideoCard({videoLink = ""}){
    let channelName = "channel name"
    let videoTitle = "title here"
    return(
        <div className='card-container'>
            <div className='thumbnail-image'>
                <img src="" alt="thumbnail" />
            </div>
            <div className='card-info'>
                <div className='video-title'>
                    <h3>{videoTitle}</h3>
                </div>
                <div className='channel-info'>
                    <div className='channel-pfp'>
                        <img src="" alt="channel-profile-image" />
                    </div>
                    <div className='channel-name'>
                        <p>{channelName}</p>
                    </div>
                </div>
                <div className='view-count'></div>
            </div>
        </div>
    );

}

export default VideoCard