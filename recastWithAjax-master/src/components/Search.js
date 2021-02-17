import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      queryString: e.target.value,
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.queryString} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={() => this.props.handleButtonClick(this.state.queryString)}>
          검색
        </button>
      </div>
    );
  }
}

export default Search;
