import express from "express";
import { getDepartmentTotalSalaryController } from "../controller/departmentController.js";
import { getDepartmentWiseMaxSalaryController } from "../controller/managerController.js";

export var departmentRouter = express.Router();

departmentRouter.get("/", getDepartmentTotalSalaryController);
departmentRouter.get(
  "/department/maxsalary",
  getDepartmentWiseMaxSalaryController
);
