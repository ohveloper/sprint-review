const utils = require("../../modules");
const model = require("../../models/url");

module.exports = {
  get: (req, res) => {
    res.send();
  },
  post: async (req, res) => {
    const { url } = req.body; // {url} 로 받아야됨
    utils.getUrlTitle(url, (err, title) => {
      module.url.create;
    });
  },
};
