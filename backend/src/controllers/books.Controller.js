import { booksModel } from "../models/books.Model.js";

const booksAll = async (req, res) => {

  const books = await booksModel.booksAll();

    return res.status(200).json({ message: "controller funcionando" });
  };
  
  // Exportando como parte de um objeto
  export const booksControllers = {
    booksAll,
  };
  