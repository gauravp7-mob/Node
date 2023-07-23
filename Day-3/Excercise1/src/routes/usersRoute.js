import express from "express";
import {
  loginUserController,
  registerUserController,
} from "../controller/usersController.js";
var userRouter = express.Router();

userRouter.post("/", registerUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
