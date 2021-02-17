const githubID = "ohveloper"; // 여러분의 아이디로 바꿔주세요

const app = {
  server: `http://3.36.72.17:3000/${githubID}/messages`,
  init: () => {
    app.eventHandler();

    app.fetch((json) => {
      json.reverse().forEach(app.renderMessage);
    });
  },
  eventHandler: () => {
    let btn = document.querySelector("#btn");

    if (btn) {
      btn.addEventListener("click", () => {
        app.post();
      });
    }
  },
  post: () => {
    let username = document.querySelector(".inputUser").value || "오늘";
    let text = document.querySelector(".inputChat").value || "사랑해";
    let roomname = "로비";
    app.clearMessages();
    app.send({ username, text, roomname }, () => {
      app.fetchAndRenderMessage();
    });
  },
  fetchAndRenderMessage: () => {
    window
      .fetch(app.server)
      .then((response) => response.json())
      .then((json) => {
        json.reverse().forEach(app.renderMessage);
      });
  },
  removeData: () => {
    fetch(`http://3.36.72.17:3000/${githubID}/clear`, {
      method: "POST",
      body: "",
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  },
  fetch: (callback) => {
    window
      .fetch(app.server)
      .then((response) => response.json())
      .then(callback);
  },
  send: (messages, callback) => {
    window
      .fetch(app.server, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messages),
      })
      .then((response) => response.json())
      .then(callback);
  },
  clearMessages: () => {
    document.querySelector("#chats").innerHTML = "";
  },
  renderMessage: (x) => {
    let divUser = document.createElement("div");
    divUser.textContent = x.username;
    let divText = document.createElement("div");
    divText.textContent = x.text;
    let divRoom = document.createElement("div");
    divRoom.textContent = x.roomname;

    let div = document.createElement("div");
    div.classList.add("chat");
    div.appendChild(divUser);
    div.appendChild(divText);
    div.appendChild(divRoom);

    let chats = document.querySelector("#chats");
    chats.append(div);
  },
};

app.init();

// 테스트를 위한 코드입니다. 아래 내용은 지우지 마세요
if (window.isNodeENV) {
  module.exports = app;
}
