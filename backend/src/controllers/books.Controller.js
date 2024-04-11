import Book from '../models/books.Model.js';

async function booksAll(req, res) {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar livros.' });
  }
}

export const booksControllers = {
  booksAll,
  // Outros controladores...
};