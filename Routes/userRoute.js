import express from "express";
import {findUserController, getAllUserController, loginUser, registerUser} from "../Controllers/userController.js";
import authenticateMiddleware from "../Middleware/authenticateMiddleware.js";
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/find",findUserController);
router.use(authenticateMiddleware)
router.get("/",getAllUserController);
export default router;