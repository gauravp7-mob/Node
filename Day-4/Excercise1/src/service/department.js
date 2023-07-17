import { pool } from "../database/database.js";

export const getDepartmentTotalSalary = async () => {
  const result = await pool.query(`select dept_name as Department_name,
    Sum(salary) as salary from departments d
    join dept_emp de on d.dept_no = de.dept_no
    join salaries s on de.emp_no = s.emp_no
    group By Department_name;
    `);
  return result[0];
};

export const getDepartmentWiseMaxSalary = async () => {
  const result = await pool.query(`
  select department_name,emloyee_name,max(salary) as max_salary from (select dept_name as department_name, concat_ws(' ',first_name,last_name) as emloyee_name, salary from employees e
    join dept_emp de on e.emp_no = de.emp_no
    join departments d on de.dept_no = d.dept_no
    join salaries s on e.emp_no = s.emp_no ) as f
    group by department_name`);
  return result;
};
