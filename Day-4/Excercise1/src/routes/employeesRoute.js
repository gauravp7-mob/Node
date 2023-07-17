import express from "express";
import {
  getAllEmployeesController,
  getEmployeeSortByAgeAndHireDateController,
  getEmployeesInAgeRange30To40Controller,
  searchEmployeeController,
} from "../controller/employeesController.js";
var router = express.Router();
router.get("/", getAllEmployeesController);
router.get("/age", getEmployeesInAgeRange30To40Controller);
router.get("/sort", getEmployeeSortByAgeAndHireDateController);
router.get("/:searchedItem", searchEmployeeController);
export default router;
