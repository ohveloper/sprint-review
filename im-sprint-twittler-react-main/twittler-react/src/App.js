import "./App.css";
import React from "react";
import Tweet from "./Tweet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderTweets = this.renderTweets.bind(this);

    this.state = {
      tweets: [],
      message: "",
      name: "",
    };
  }

  handleChange(event) {
    return this.setState({ message: event.target.value });
  }

  // }
  handleClick() {
    let newTweet = this.state.tweets.concat({
      // uuid: this.state.currentNum,
      name: document.querySelector("#name").value || "김아무개",
      content: this.state.message,
    });
    if (this.state.message !== "") {
      this.setState({
        tweets: newTweet,
        message: "",
        name: "",
      });
    } else {
      alert("pleas type infomation");
    }

    // console.log(this.state.value);
    console.log(this.state.tweets);
    console.log(this.state.message);
  }
  renderTweets() {
    return this.state.tweets.map((tweet, idx) => {
      return <Tweet key={idx} content={tweet.content} name={tweet.name} />;
    });
  }
  render() {
    return (
      <div>
        <div>
          <input id="name"></input>
          <textarea value={this.state.message} onChange={this.handleChange} />
          <button onClick={this.handleClick}>click</button>
        </div>
        <ul>{this.renderTweets()}</ul>
        {/* <div>{this.state.message}</div> */}
      </div>
    );
  }
}

export default App;
