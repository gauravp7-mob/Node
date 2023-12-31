import _ from "lodash";
import { bookModel } from "../model/books.js";
// export const getAllBooks = async () => {
//   const books = await fs.readFile(
//     "/Users/gauravp7/Desktop/Node/Day-3/Excercise1/data/books.json"
//   );
//   return JSON.parse(books);
// };
// export const findBooksByAuthor = async (author) => {
//   try {
//     const books = await getAllBooks();
//     const booksFound = _.find(books, (book) => book.author == author);
//     if (booksFound) {
//       return booksFound;
//     }
//   throw new Error("Not found");
//   } catch (error) {
//     console.log(error);
//     return error.message;
//   }
// };

// export const createBook = async (book) => {
//   try {
//     const books = await getAllBooks();
//     books.push(book);
//     await fs.writeFile(
//       "/Users/gauravp7/Desktop/Node/Day-3/Excercise1/data/books.json",
//       JSON.stringify(books)
//     );
//   } catch {
//     return error.message;
//   }
// };

// export const deleteBookByAuthor = async (author) => {
//   try {
//     const books = await getAllBooks();
//     const filteredBooks = _.filter(books, (book) => {
//       return book.author != author;
//     });
//     if (filteredBooks) {
//       await fs.writeFile(
//         "/Users/gauravp7/Desktop/Node/Day-3/Excercise1/data/books.json",
//         JSON.stringify(filteredBooks)
//       );
//     }
//     throw new Error("No book found");
//   } catch (error) {
//     return error.message;
//   }
// };

export const getAllBooks = async () => {
  const books = await bookModel.find();
  return books;
};

export const createBook = async (book) => {
  try {
    const books = await bookModel.create(book);
    return books;
  } catch (error) {
    return error.message;
  }
};

const findBooksByAuthor = async (author) => {
  try {
    const booksFound = await bookModel.find({ author: author });
    if (booksFound.length > 0) {
      return booksFound;
    }
    throw new Error("Not found");
  } catch (error) {
    return error.message;
  }
};

export const deleteBookByAuthor = async (author) => {
  try {
    const deletedCountObj = await bookModel.deleteMany({ author: author });
    const { deletedCount } = deletedCountObj;
    console.log(deletedCount);
    if (deletedCount) {
      return `${deletedCount} records deleted`;
    }
    throw new Error("Not Found");
  } catch (error) {
    return error.message;
  }
};
export const deleteBookById = async (id) => {
  try {
    const deletedCountObj = await bookModel.deleteOne({ _id: id });
    const { deletedCount } = deletedCountObj;
    console.log(deletedCount);
    if (deletedCount == 1) {
      return `record deleted`;
    }
    throw new Error("Not Found");
  } catch (error) {
    return error.message;
  }
};

export const bookService = { findBooksByAuthor };
