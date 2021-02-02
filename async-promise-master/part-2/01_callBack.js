const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    //utf8 써주자
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile,
};
