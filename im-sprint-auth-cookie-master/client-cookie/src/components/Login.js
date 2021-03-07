import React, { Component } from "react";
const axios = require("axios");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async loginRequestHandler() {
    // TODO: 로그인 요청을 보내세요.
    try {
      await axios
        .post(
          "https://localhost:4000/users/login",
          {
            userId: this.state.username,
            password: this.state.password,
          },
          {
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
        .then(() => this.props.loginHandler(true));

      await axios
        .get("https://localhost:4000/users/userinfo", {
          // "Content-Type": "application/json",
          withCredentials: true,
        })
        .then((res) => {
          let { userId, email, id } = res.data.data;
          this.props.setUserInfo({
            id,
            userId,
            email,
          });
          // this.props.setUserInfo(result);
        });
    } catch (err) {
      alert(err);
    }

    //
    // 로그인에 성공하면
    // - props로 전달받은 함수를 호출해, 로그인 상태를 변경하세요.
    // - GET /users/userinfo 를 통해 사용자 정보를 요청하세요
    //
    // 사용자 정보를 받아온 후
    // - props로 전달받은 함수를 호출해, 사용자 정보를 변경하세요.
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="inputField">
          <div>Username</div>
          <input name="username" onChange={(e) => this.inputHandler(e)} value={this.state.username} type="text" />
        </div>
        <div className="inputField">
          <div>Password</div>
          <input name="password" onChange={(e) => this.inputHandler(e)} value={this.state.password} type="password" />
        </div>
        <div className="passwordField">
          <button onClick={this.loginRequestHandler} className="loginBtn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
