import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

const { MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

console.log (MYSQL_USER + ' ' + MYSQL_DB + ' ' + MYSQL_HOST);

const connection = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
    
});

export default connection;

connection
.authenticate()
.then(() => {
  console.log('Conexão bem-sucedida.');
})
.catch(err => {
  console.error('Erro ao conectar-se ao banco de dados:', err);
});