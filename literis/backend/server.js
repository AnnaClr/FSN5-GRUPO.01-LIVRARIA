require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes'); // Rotas de livros
const userRoutes = require('./routes/userRoutes');
const pool = require('./config/db'); // Conexão com o banco de dados

const app = express();

console.log('🔧 Iniciando configuração do servidor...');

// Middleware para CORS
app.use(cors());
console.log('✅ Middleware CORS configurado.');

// Middleware para JSON
app.use(express.json());
console.log('✅ Middleware para JSON carregado.');

// Rotas para usuários – observe o caminho '/api/user'
app.use('/api/user', userRoutes);
console.log('✅ Rotas de usuário carregadas.');

// Rota principal para verificação
app.get('/', (req, res) => {
  console.log('⚡ Rota principal acessada.');
  res.status(200).send('✅ Servidor rodando corretamente!');
});

// Conexão com o banco de dados
pool.connect()
  .then(() => console.log('✅ Conexão com o banco de dados estabelecida!'))
  .catch(err => {
      console.error('❌ Erro ao conectar com o banco:', err.message);
      process.exit(1);
  });

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado na porta ${PORT}`);
});