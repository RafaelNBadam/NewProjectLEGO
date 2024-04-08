import connection from "./connection.js";


const booksAll = async () => {
const books = await connection.execute("SELECT * FROM books");
return books;
}

export const booksModel = {
    booksAll,
  };
  