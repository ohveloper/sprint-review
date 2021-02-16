import React from 'react';
import VideoListEntry from './VideoListEntry';

// 부모 컴포넌트로부터 list를 전달받으면 fakeData는 더이상 필요하지 않습니다
import { fakeData } from './__test__/fakeData';
console.log(fakeData)

const VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
);

export default VideoList;
