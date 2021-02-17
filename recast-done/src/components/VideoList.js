import React from "react";
import VideoListEntry from "./VideoListEntry";

// 부모 컴포넌트로부터 list를 전달받으면 fakeData는 더이상 필요하지 않습니다

const VideoList = ({ videos, handleClick }) => (
  <div className="video-list media">
    {videos.map((data, idx) => {
      return <VideoListEntry video={data} key={idx} handleClick={handleClick} />;
    })}
  </div>
);

export default VideoList;
