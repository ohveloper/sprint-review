import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import LoadingIndicator from "./LoadingIndicator";
import { fakeData } from './__test__/fakeData';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      currentVideo: null,
      isLoading: true
    }

    this.setCurrentVideo = this.setCurrentVideo.bind(this)
    this.searchVideo = this.searchVideo.bind(this)
  }

  componentDidMount() {
    // side effect를 일으키는 searchVideo 함수는 componentDidMount에서 처리합니다.
    this.searchVideo('코드스테이츠')
  }

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video
    })
  }

  searchVideo(queryString) {
    // 대부분의 비동기 요청은 side effect를 일으킨다고 볼 수 있습니다.
    // 현재의 구현은, 시간이 지나면 가짜 데이터와 함께 로딩이 끝나지만, 여기엔 AJAX 요청이 들어가야 합니다.
    setTimeout(() => {
      this.setState({
        isLoading: false,
        videos: fakeData
      })
    }, 2000)
  }

  render() {
    return (
      <div>
        <Nav />
        {this.state.isLoading ?
          <LoadingIndicator />
          :
          <div className="parent">
            <VideoPlayer video={this.state.currentVideo} />
            <VideoList videos={this.state.videos} handleClickEntry={this.setCurrentVideo} />
          </div>
        }
      </div>
    )
  }
}

export default App;
