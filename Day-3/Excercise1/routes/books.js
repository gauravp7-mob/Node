import {
  getAllBooksController,
  findBooksByAuthorController,
  createBookController,
  deleteBookByAuthorController,
  deleteBookByIdController,
} from "../controller/books.js";
import { authenticate } from "../middleware/authentication.js";
import { validate } from "../middleware/validation.js";

import express from "express";
var router = express.Router();
router.get("/", authenticate, getAllBooksController);
router.get("/author/:authorName", findBooksByAuthorController);
router.post("/", validate, createBookController);
router.delete("/author/:authorName", deleteBookByAuthorController);
router.delete("/:id", deleteBookByIdController);
export default router;
