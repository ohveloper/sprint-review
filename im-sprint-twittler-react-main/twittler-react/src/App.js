import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
    // this.tweet = this.tweet.bind(this);
  }

  handleChange(event) {
    return this.setState({ value: event.target.value });
  }
  handleClick() {
    let tweet = this.state.tweets.concat({
      message: this.state.value,
    });
    this.setState({
      tweets: tweet,
      value: "",
    });
    // console.log(this.state.value);
    // console.log(tweet);
    console.log(this.state.tweets);
  }
  renderTweets() {
    this.state.tweets.map((tweet, idx) => {
      return <Tweet key={idx} content={tweet.content}></Tweet>;
    });
  }
  render() {
    return (
      <div id="root">
        <div>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>click</button>
        </div>
        <div>{this.state.value}</div>
        <ul>{this.renderTweets()}</ul>
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <li>
        <div>{this.props.content}</div>
      </li>
    );
  }
}
export default App;
