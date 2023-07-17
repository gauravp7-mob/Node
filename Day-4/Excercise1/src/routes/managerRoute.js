import express from "express";
import { getManagerWithsSalaryController } from "../controller/managerController.js";

export var managerRouter = express.Router();

managerRouter.get("/", getManagerWithsSalaryController);
