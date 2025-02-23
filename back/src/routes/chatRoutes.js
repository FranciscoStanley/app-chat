const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

router.get("/messages", chatController.getChatHistory);
router.post("/messages", chatController.postMessage);

module.exports = router;
