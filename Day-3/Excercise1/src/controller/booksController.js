import {
  findBooksByAuthor,
  getAllBooks,
  deleteBookByAuthor,
  deleteBookById,
  createBook,
} from "../service/books.js";

export const getAllBooksController = async (req, res) => {
  const books = await getAllBooks();
  res.json(books);
};

export const findBooksByAuthorController = async (req, res) => {
  try {
    const authorName = req.params.authorName;
    console.log(authorName);
    if (!authorName) {
      throw new Error("Please provide author name");
    } else {
      const books = await findBooksByAuthor(authorName);
      console.log(books);
      return res.send(books);
    }
  } catch (error) {
    return res.send(error.message);
  }
};
export const createBookController = async (req, res) => {
  const book = req.body;
  const updatedBooks = await createBook(book);
  res.send(updatedBooks);
};
export const deleteBookByAuthorController = async (req, res) => {
  try {
    const author = req.params.authorName;
    if (!author) {
      throw new Error("please enter author");
    } else {
      const response = await deleteBookByAuthor(author);
      res.send(response);
    }
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteBookByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("Enter id");
    } else {
      const response = await deleteBookById(id);
      res.send(response);
    }
  } catch (error) {
    res.send(error.message);
  }
};
