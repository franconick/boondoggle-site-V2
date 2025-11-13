import './thumbnail-container.css'
import { useState } from 'react';

function ThumbnailContainer({image1 = "",image2 = "",image3 = ""}){
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (imagesrc) => {
        setSelectedImage(imagesrc);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return(
        <>
        <div className="thumbnail-row">
            <img className="thumbnail" src={image1} alt="" onClick={() => openLightbox(image1)}/>
            <img className="thumbnail" src={image2} alt="" onClick={() => openLightbox(image2)}/>
            <img className="thumbnail" src={image3} alt="" onClick={() => openLightbox(image3)}/>
        </div>
        {selectedImage && (
            <div className='lightbox-overlay' onClick={closeLightbox}>
                <img className = 'enlarged-image' src={selectedImage} alt="Enlarged Image" onClick={(e) => e.stopPropagation()} />

            </div>

        )}
        </>
    );
}

export default ThumbnailContainer;