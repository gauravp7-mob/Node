import mongoose from "mongoose";

const schema = mongoose.Schema;

const booksSchema = new schema({
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
});
export const bookModel = mongoose.model("books", booksSchema);
