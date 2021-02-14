import React from "react";

class Tweet extends React.Component {
  render() {
    return (
      <li id="tweet">
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.content}</div>
          <div>{this.props.date}</div>
        </div>
      </li>
    );
  }
}

export default Tweet;
