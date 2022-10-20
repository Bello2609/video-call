const express = require("express");

const router = express.Router();
const audioController = require("../controller/audio");
router.post("/audio", audioController.makeAudioCall);

module.exports = router;