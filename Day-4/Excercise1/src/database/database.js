import mysql from "mysql2";

export const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Gaurav@123",
    database: "data",
  })
  .promise();

// const result = await pool.query("select * from employees");

// console.log(result);
