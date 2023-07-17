import { pool } from "../database/database.js";

export const getAllEmployees = async (page, limit) => {
  const pageNum = Number(page);
  const limitNum = Number(limit);
  const offset = (pageNum - 1) * limitNum;
  console.log(offset);
  console.log(limitNum);
  const result = await pool.query(
    `select concat(first_name,'  ',last_name) as Employee_Name,
    dept_name as Department_Name,
    DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),e.birth_date)), '%Y')+0 AS Age,
    title as Title
    from employees e join dept_emp de on e.emp_no = de.emp_no
    join departments d on de.dept_no= d.dept_no
    join titles t on t.emp_no = e.emp_no order by age
    limit ${limitNum} offset ${offset}`
  );
  return result[0];
};

export const getEmployeesInAgeRange30To40 = async () => {
  const result = await pool.query(
    `select concat(first_name,'  ',last_name) as Employee_Name,
    salary as Salary from employees e
    join salaries s on e.emp_no = s.emp_no
    where DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),e.birth_date)), '%Y')+0
    between 30 and 40`
  );
  return result[0];
};

export const getEmployeeSortByAgeAndHireDate = async () => {
  const result = await pool.query(
    `select * from employees e
    order by DATE_FORMAT(FROM_DAYS(DATEDIFF(now(),e.birth_date)), '%Y')+0 asc,
    hire_date desc`
  );
  return result[0];
};

export const searchEmployee = async (searchedField) => {
  const result = await pool.query(`
      select * from employees e where e.emp_no = '${searchedField}' or e.first_name = '${searchedField}' or e.last_name = '${searchedField}'
      `);

  return result[0];
};
