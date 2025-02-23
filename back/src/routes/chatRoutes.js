import { Router } from "express";
import * as chatController from "../controller/chatController.js";
const router = Router();

router.get("/messages", chatController.getChatHistory);
router.post("/messages", chatController.postMessage);

export default router;
