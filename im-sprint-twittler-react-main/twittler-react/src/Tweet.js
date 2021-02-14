import React from "react";

class Tweet extends React.Component {
  render() {
    return (
      <li>
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.content}</div>
        </div>
      </li>
    );
  }
}

export default Tweet;
