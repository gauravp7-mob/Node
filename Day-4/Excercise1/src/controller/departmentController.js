import { getDepartmentTotalSalary } from "../service/department.js";

export const getDepartmentTotalSalaryController = async (req, res) => {
  try {
    const response = await getDepartmentTotalSalary();
    if (response.length > 0) {
      res.send(response);
    } else {
      return next(createError(404, "not found"));
    }
  } catch (error) {
    res.send(error.message);
  }
};
