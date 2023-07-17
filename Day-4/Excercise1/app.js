import express, { json, urlencoded } from "express";
import _ from "lodash";
import logger from "morgan";
import path from "path";
import { pool } from "./src/database/database.js";
import router from "./src/routes/employeesRoute.js";
import { managerRouter } from "./src/routes/managerRoute.js";
import { departmentRouter } from "./src/routes/departmentRoute.js";
const __dirname = path.resolve();

var app = express();

// view engine setup
// app.set("views", join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = (data) => {
    if (!data.error) {
      const formattedResponse = {
        status: res.statusCode,
        data: _.isArray(data) ? [...data] : _.isObject(data) ? [data] : [],
        error: null,
      };
      return originalJson.call(res, formattedResponse);
    }
    return originalJson.call(res, data);
  };
  next();
});
app.use("/employees", router);
app.use("/manager", managerRouter);
app.use("/department", departmentRouter);

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status).json({
    status: err.statusCode,
    data: [],
    error: err.message,
  });
  next();
});

export default app;
