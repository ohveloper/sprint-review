const FILL_ME_IN = "FILL_ME_IN";
// TODO: 단계 4. FILL_ME_IN을 적당한 것으로 교체해야 합니다.
// HINT: 쿠키파저는 clearCookie('쿠키의 키')로 해당 키를 가진 쿠키를 삭제할 수 있습니다.
// 만약 clearCookie('user') 코드가 실행된다면 `user=....` 쿠키가 삭제됩니다.
module.exports = {
  post: (req, res) => {
    // console.log(req);
    if (!req.cookies.id) {
      // console.log(req.cookies);
      res.status(400).json({ data: null, message: "not authorized" });
    } else {
      res.clearCookie("id");
      res.json({ data: null, message: "ok" });
    }
  },
};
