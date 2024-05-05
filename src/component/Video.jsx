import React, {useEffect, useRef} from 'react';

function Video({videoId,style}) {

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className={style}>
            <iframe
                className="w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );


}

export default Video;