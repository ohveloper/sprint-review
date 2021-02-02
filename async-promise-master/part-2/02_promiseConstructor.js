const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

const getDataFromFilePromise = (filePath) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      //utf8 신경쓰자
      if (err) {
        rejects(err);
      } else {
        resolve(data);
      }
    });
  });
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise,
};
