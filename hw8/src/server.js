import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import BookRouter from "./routers/Book.router.js";

const startServer = () => {
    const Book = express();

    Book.use(cors());
    Book.use(express.json());

    Book.use("/api/Book", BookRouter);

    Book.use(notFoundHandler);
    Book.use(errorHandler);

    const port = process.env.PORT || 3000;

    Book.listen(port, () => console.log(`Server running on ${port} port`));
}

export default startServer;