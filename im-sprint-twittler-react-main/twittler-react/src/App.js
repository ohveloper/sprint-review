import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [{}, {}],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  hadleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClick() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div id="root">
        <div>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleClick}>click</button>
        </div>
      </div>
    );
  }
}

export default App;
