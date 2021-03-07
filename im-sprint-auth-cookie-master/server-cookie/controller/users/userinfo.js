const { Users } = require("../../models");

const FILL_ME_IN = "FILL_ME_IN";
// TODO: 단계3. FILL_ME_IN을 적당한 것으로 교체해야 합니다.
// HINT: 쿠키에 로그인에서 설정한 쿠키가 존재하는지 확인해야 합니다.

module.exports = {
  get: async (req, res) => {
    // HINT: 쿠키에 유저정보가 존재하는지 한번 다음줄에 console.log(req.cookies)를 작성해 보세요. 물론 로그인 이후 GET /users/userinfo 요청을 하셔야 합니다.
    console.log(req.cookies);
    if (!req.cookies.id) {
      res.status(400).send({ data: null, message: "not authorized" });
    } else {
      let userInfo = await Users.findOne({
        where: { id: req.cookies.id },
      });

      res.json({ data: userInfo, message: "ok" });
    }
  },
};
