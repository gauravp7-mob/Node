import {
  findBooksByAuthor,
  getAllBooks,
  createBook,
  deleteBookByAuthor,
} from "../service/books.js";

export const getAllBooksController = async (req, res) => {
  const books = await getAllBooks();
  res.send(books);
};

export const findBooksByAuthorController = async (req, res) => {
  const authorName = req.params.authorName;
  const books = await findBooksByAuthor(authorName);
  res.send(books);
};
export const createBookController = async (req, res) => {
  const book = req.body;
  const updatedBooks = await createBook(book);
  res.send(updatedBooks);
};
export const deleteBookByAuthorController = async (req, res) => {
  const author = req.params.authorName;
  const updatedBooks = await deleteBookByAuthor(author);
  res.send(updatedBooks);
};
