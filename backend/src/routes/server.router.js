import express from "express";
import { booksControllers } from "../controllers/books.controller.js";

const Router = express.Router();

Router.get("/books", booksControllers.booksAll);
export default Router;
