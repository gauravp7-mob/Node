import {
  findBooksByAuthor,
  getAllBooks,
  deleteBookByAuthor,
  deleteBookById,
  createBook,
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
  const response = await deleteBookByAuthor(author);
  res.send(response);
};
export const deleteBookByIdController = async (req, res) => {
  const id = req.params.id;
  const response = await deleteBookById(id);
  res.send(response);
};
