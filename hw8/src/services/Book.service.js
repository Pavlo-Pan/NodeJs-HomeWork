import Book from "../db/Book.js";

export const getBooks = () => Book.findAll();

export const addBook = payload => Book.create(payload); // throw new Error()

export const updateBook = (id, data) =>
    Book.update(data, { where: { id } });

export const deleteBook = (id) =>
    Book.destroy({ where: { id } });

export const getBookById = (id) => Book.findByPk(id);
