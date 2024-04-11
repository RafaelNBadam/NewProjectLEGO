import { DataTypes } from 'sequelize';
import sequelize from './connection.js';

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Título é obrigatório
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false, // Descrição é opcional
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false, // Data de lançamento é opcional
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false, // Autor é obrigatório
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false, // Imagem é opcional
  },
});
export default Book;
