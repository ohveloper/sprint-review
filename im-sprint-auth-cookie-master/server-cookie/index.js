const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const fs = require("fs");
const https = require("https");

const PORT = process.env.PORT || 4000;

const usersRouter = require("./routes/user");

const FILL_ME_IN = "FILL_ME_IN";

app.use(express.json());
app.use(logger("dev"));

// TODO: 단계1. 적당한 cors 옵션을 작성해야 합니다. origin은 클라이언트(리액트) 서버의 주소이며 method 는 오로지 GET, POST, OPTION만 허용해야 합니다.
app.use(
  cors({
    origin: "https://localhost:3000",
    methods: "GET, POST, OPTION",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/**
 * /users 경로에 대해서 라우터를 이용하기 때문에,
 * 반드시 아래와 같은 주소와 메서드로 요청을 보내야 합니다.
 *
 * POST https://localhost:4000/users/login,
 * POST https://localhost:4000/users/logout,
 * GET https://localhost:4000/users/userinfo
 */
app.use("/users", usersRouter);

// 단계1. 아래 FILL_ME_IN을 mkcert로 발급한 인증서 pem파일, 키 pem 파일이름으로 교체해야 합니다.
// 이후 controller/users/login.js에서 단계2를 진행하세요.
let server;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https
    .createServer(
      {
        key: fs.readFileSync(__dirname + `/` + "key.pem", "utf-8"),
        cert: fs.readFileSync(__dirname + `/` + "cert.pem", "utf-8"),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT);
}
module.exports = server;
