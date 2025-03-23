const pool = require('../config/db'); // Conexão com o banco de dados

const BookModel = {
  async create(bookData) {
    const { title, author, description, imageUrl } = bookData;
    const query = `
      INSERT INTO books (title, author, description, image_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [title, author, description, imageUrl];
    console.log("📥 Inserindo novo livro no banco de dados...");
    const result = await pool.query(query, values);
    console.log("✅ Livro inserido com sucesso:", result.rows[0]);
    return result.rows[0];
  },

  async findAll() {
    console.log("🔍 Buscando todos os livros...");
    const query = 'SELECT * FROM books;';
    const result = await pool.query(query);
    console.log("✅ Livros encontrados:", result.rows);
    return result.rows;
  },

  async findById(id) {
    console.log(`🔍 Buscando livro com ID ${id}...`);
    const query = 'SELECT * FROM books WHERE id = $1;';
    const result = await pool.query(query, [id]);
    console.log("✅ Livro encontrado:", result.rows[0]);
    return result.rows[0];
  },

  async update(id, bookData) {
    const { title, author, description, imageUrl } = bookData;
    const query = `
      UPDATE books
      SET title = $1, author = $2, description = $3, image_url = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [title, author, description, imageUrl, id];
    console.log(`🛠 Atualizando livro no banco com ID ${id}...`);
    const result = await pool.query(query, values);
    console.log("✅ Livro atualizado no banco de dados:", result.rows[0]);
    return result.rows[0];
  },

  async delete(id) {
    const query = 'DELETE FROM books WHERE id = $1 RETURNING *;';
    console.log(`🗑 Excluindo livro com ID ${id} do banco...`);
    const result = await pool.query(query, [id]);
    console.log("✅ Livro excluído do banco de dados:", result.rows[0]);
    return result.rows[0];
  },
};

module.exports = BookModel;
