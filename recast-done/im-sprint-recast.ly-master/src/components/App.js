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
      video: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      video: event,
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="parent">
          <VideoPlayer video={this.state.video} />
          <VideoList videos={this.state.videos} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
