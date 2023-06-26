import express from "express";
import {createMessageController, getMessageController} from "../Controllers/messageController.js";
import authenticateMiddleware from "../Middleware/authenticateMiddleware.js";
const router = express.Router();
router.use(authenticateMiddleware)
router.post("/",getMessageController)
router.post("/create",createMessageController)
export default router