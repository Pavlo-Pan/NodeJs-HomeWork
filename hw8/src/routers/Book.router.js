import { Router } from "express";

import { getBookController, addBookController, updateBookController, deleteBookController, getBookByIdController } from "../controllers/Books.controller.js";

const BooksRouter = Router();

BooksRouter.get("/", getBookController);

BooksRouter.post("/", addBookController);

BooksRouter.put("/:id", updateBookController);

BooksRouter.delete("/:id", deleteBookController);

BooksRouter.get("/:id", getBookByIdController);


export default BooksRouter;