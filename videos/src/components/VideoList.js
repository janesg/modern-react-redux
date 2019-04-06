import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    
    const videoItems = videos.map(v => {
        return (
            <VideoItem 
                key={ v.id.videoId } 
                video={ v } 
                onVideoSelect={ onVideoSelect }/>
        );
    });   

    return (
        <div className="ui relaxed divided list">
            { videoItems }
        </div>
    );
};

export default VideoList;