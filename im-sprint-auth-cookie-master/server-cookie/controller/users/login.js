// 해당 모델의 인스턴스 객체를 models/index.js에서 가져옵니다.
const { Users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    // console.log(userInfo);
    // console.log(req.body);
    if (!userInfo) {
      res.status(400).json({
        data: null,
        message: "not authorized",
      });
    } else {
      res.cookie("id", userInfo.id, {
        domain: "localhost",
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "none",
      });
      res.status(200).json({
        data: null,
        message: "ok",
      });
    }

    /**
     * ! 단계2. 유어클래스를 참고하여 로그인 로직을 구현하세요.
     * HINT: userInfo에는 이미 데이터베이스에 데이터 요청을 한 결과가 존재합니다.
     * 한번 콘솔에 userInfo를 출력해 보세요. 빈객체 혹은 NULL이 출력된다면 클라이언트가 전달해준 유저정보및 users 데이터베이스를 확인해 보세요.
     * 데이터 베이스에 저장된 유저정보로만 로그인이 가능합니다.
     * 이후 controller/users/logout.js에서 다음 단계를 진행합니다.
     */
  },
};
