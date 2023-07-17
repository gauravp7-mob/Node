import { getDepartmentWiseMaxSalary } from "../service/department.js";
import { getManagerWithSalary } from "../service/manager.js";

export const getManagerWithsSalaryController = async (req, res) => {
  try {
    const response = await getManagerWithSalary();
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getDepartmentWiseMaxSalaryController = async (req, res) => {
  try {
    const response = await getDepartmentWiseMaxSalary();
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};
