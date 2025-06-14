import * as BooksService from "../services/Book.service.js";

export const getBookController = async (req, res) => {
  const result = await BooksService.getBooks();

  res.json(result);
};

export const addBookController = async (req, res) => {
  const result = await BooksService.addBook(req.body); // throw new Error()

  res.status(201).json(result);
}

export const updateBookController = async (req, res) => {
  const id = req.params.id;
  const result = await BooksService.updateBook(id, req.body);
  res.json({ updated: result[0] > 0 });
};

export const deleteBookController = async (req, res) => {
  const id = req.params.id;
  const result = await BooksService.deleteBook(id);
  res.json({ deleted: result > 0 });
};

export const getBookByIdController = async (req, res) => {
  const id = req.params.id;
  const book = await BooksService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};
