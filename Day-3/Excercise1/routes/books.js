import {
  getAllBooksController,
  findBooksByAuthorController,
  createBookController,
  deleteBookByAuthorController,
} from "../controller/books.js";
import { validate } from "../middleware/validation.js";

import express from "express";
var router = express.Router();
router.get("/", getAllBooksController);
router.get("/:authorName", findBooksByAuthorController);
router.post("/", validate, createBookController);
router.delete("/:authorName", deleteBookByAuthorController);
export default router;
