const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");
const { TestScheduler } = require("jest");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  const user1 = await getDataFromFilePromise(user1Path);
  const user2 = await getDataFromFilePromise(user2Path);
  const text = `[${user1}, ${user2}]`;
  return JSON.parse(text);
};

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};
