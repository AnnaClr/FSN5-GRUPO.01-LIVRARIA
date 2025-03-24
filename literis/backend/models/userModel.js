const pool = require('../config/db'); // Conexão com o banco de dados

const UserModel = {
  // Cria um novo usuário
  async create(userData) {
    const { email, password } = userData;
    const query = `
      INSERT INTO users (email, password)
      VALUES ($1, $2)
      RETURNING id, email;
    `;
    const values = [email, password];
    console.log("📥 Inserindo novo usuário no banco de dados...");
    const result = await pool.query(query, values);
    console.log("✅ Usuário inserido com sucesso:", result.rows[0]);
    return result.rows[0];
  },

  // Busca um usuário pelo email
  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1;';
    console.log(`🔍 Buscando usuário com email ${email}...`);
    const result = await pool.query(query, [email]);
    console.log("✅ Usuário encontrado:", result.rows[0]);
    return result.rows[0];
  },
};

module.exports = UserModel;
