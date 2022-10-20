const express = require("express");

const router = express.Router();
const videoController = require("../controller/video");

router.post("/video", videoController.makeVideoCall);

module.exports = router;