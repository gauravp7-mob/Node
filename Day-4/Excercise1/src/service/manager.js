import { pool } from "../database/database.js";

export const getManagerWithSalary = async () => {
  const result = await pool.query(`
  select concat(first_name,' ',last_name) as Manager_Name,
  gender as Manager_gender,
  dept_name as Department_name,
  salary from employees e
  join dept_manager dm on e.emp_no = dm.emp_no
  join departments d on dm.dept_no = d.dept_no
  join salaries s on e.emp_no = s.emp_no
  `);

  return result[0];
};
