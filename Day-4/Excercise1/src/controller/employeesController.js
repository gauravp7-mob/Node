import createError from "http-errors";
import {
  getAllEmployees,
  getEmployeeSortByAgeAndHireDate,
  getEmployeesInAgeRange30To40,
  searchEmployee,
} from "../service/employee.js";

export const getAllEmployeesController = async (req, res, next) => {
  try {
    if (req.query) {
      const { page, limit } = req.query;
      const response = await getAllEmployees(page, limit);
      res.send(response);
    } else {
      return next(createError(400, "Bad request"));
    }
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
};

export const getEmployeesInAgeRange30To40Controller = async (
  req,
  res,
  next
) => {
  try {
    const response = await getEmployeesInAgeRange30To40();
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getEmployeeSortByAgeAndHireDateController = async (
  req,
  res,
  next
) => {
  try {
    const response = await getEmployeeSortByAgeAndHireDate();
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const searchEmployeeController = async (req, res) => {
  try {
    const searchedItem = req.params.searchedItem;
    const response = await searchEmployee(searchedItem);
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};
