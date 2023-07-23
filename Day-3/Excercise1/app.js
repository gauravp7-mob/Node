import createError from "http-errors";
import express, { json, urlencoded } from "express";
import logger from "morgan";
import userRouter from "./src/routes/usersRoute.js";
import router from "./src/routes/booksRoute.js";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Exercise")
  .then(() => console.log("Connected!"));

var app = express();

app.set("view engine", "jade");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/books", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
});

export default app;
