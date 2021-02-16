import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { fakeData } from "./__test__/fakeData";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="parent">
          <VideoPlayer />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
