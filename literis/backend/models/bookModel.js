const pool = require('../config/db'); // Importa a conexão com o banco de dados

const BookModel = {
  async create(bookData) {
    const { title, author, description, imageUrl } = bookData; // Extrai os dados recebidos
    const query = `
      INSERT INTO books (title, author, description, image_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `; // Query para inserir os dados no banco
    const values = [title, author, description, imageUrl]; // Mapeia os valores para a query
    const result = await pool.query(query, values); // Executa a query
    return result.rows[0]; // Retorna o registro inserido
  },
};

module.exports = BookModel; // Exporta o modelo para uso no controlador
