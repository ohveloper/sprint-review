const express = require("express");
const router = express.Router();
const controllers = require("../controllers/links");

/* GET links listing. */
router.get("/", controllers.get);
router.post("/", controllers.post);

module.exports = router;
