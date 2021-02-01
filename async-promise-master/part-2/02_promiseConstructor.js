const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

const getDataFromFilePromise = (filePath) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        return rejects(err);
      } else {
        return resolve(data);
      }
    });
  });
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise,
};
