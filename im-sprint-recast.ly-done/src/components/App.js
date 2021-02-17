import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: fakeData,
      // isState: true,
      video: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(video) {
    this.setState({
      video: video,
      // isState: false,
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="parent">
          <VideoPlayer video={this.state.video} />
          {/* {this.state.isState ? "hello world" : <VideoPlayer video={this.state.video} />} */}
          <VideoList videos={this.state.videos} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
