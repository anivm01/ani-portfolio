import React from 'react'

type VideoProps = {
    video_id: string;
};

const Video: React.FC<VideoProps> = ({ video_id }) => {
    return (
        <div className='w-full'>
            <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${video_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default Video;
