const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
const readAllUsersChaining = () => {
  // 함수 안에 들어있다가 마지막에 리턴이 되어야 작동
  return getDataFromFilePromise(user1Path)
    .then((data1) => {
      return getDataFromFilePromise(user2Path).then((data2) => {
        return `[${data1}, ${data2}]`;
      });
    })
    .then((text) => JSON.parse(text));
};
// readAllUsersChaining();

module.exports = {
  readAllUsersChaining,
};
