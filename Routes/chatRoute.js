import express from "express";
import {createChatController, findChatController, findUserChatsController} from "../Controllers/chatController.js";
import authenticateMiddleware from "../Middleware/authenticateMiddleware.js";
const router = express.Router();
router.use(authenticateMiddleware)
router.post("/",createChatController)
router.get("/findUser",findUserChatsController)
router.post("/findChat",findChatController)
export default router;