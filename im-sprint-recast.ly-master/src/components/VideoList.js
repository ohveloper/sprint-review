import React from "react";
import VideoListEntry from "./VideoListEntry";

// 부모 컴포넌트로부터 list를 전달받으면 fakeData는 더이상 필요하지 않습니다
import { fakeData } from "./__test__/fakeData";
console.log(fakeData);

const VideoList = ({ videos, onClick }) => (
  <div className="video-list media">
    {videos.map((video, idx) => {
      return <VideoListEntry key={idx} video={video} onClick={onClick} />;
    })}
  </div>
);

export default VideoList;
