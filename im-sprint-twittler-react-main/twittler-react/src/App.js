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
    let date = function (date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      day = day >= 10 ? day : "0" + day;
      return year + "-" + month + "-" + day;
    };
    let newTweet = this.state.tweets.concat({
      // uuid: this.state.currentNum,
      name: document.querySelector("#inputName").value || "김아무개",
      content: this.state.message,
      date: date(new Date()),
    });
    if (this.state.message !== "") {
      this.setState({
        tweets: newTweet,
        message: "",
        name: "",
      });
      document.querySelector("#inputName").value = null;
    } else {
      alert("pleas type infomation");
    }

    // console.log(this.state.value);
    console.log(this.state.tweets);
    console.log(this.state.message);
  }
  renderTweets() {
    return this.state.tweets.reverse().map((tweet, idx) => {
      return <Tweet key={idx} content={tweet.content} name={tweet.name} date={tweet.date} />;
    });
  }
  render() {
    return (
      <div id="App">
        <div id="userBox">
          <input autoComplete="off" id="inputName" placeholder="이름을 입려하세요"></input>
          <input id="inputText" autoComplete="off" value={this.state.message} onChange={this.handleChange} placeholder="내용을 입력하세요" />

          <button id="button" onClick={this.handleClick}>
            click
          </button>
        </div>
        <div id="tweetBox">
          <ul>{this.renderTweets()}</ul>
          {/* <div>{this.state.message}</div> */}
        </div>
      </div>
    );
  }
}

export default App;
