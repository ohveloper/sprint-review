import React from 'react';

const VideoListEntry = () => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">Video Title</div>
      <div className="video-list-entry-detail">Video Description</div>
    </div>
  </div>
);

export default VideoListEntry;
