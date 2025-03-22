require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes'); // Rotas do SuggestBook
const pool = require('./config/db'); // Conexão com o banco de dados

const app = express();

// Logs iniciais
console.log('🔧 Iniciando configuração do servidor...');

// Middleware para CORS
app.use(cors());
console.log('✅ Middleware CORS configurado com sucesso.');

// Middleware para JSON
app.use(express.json());
console.log('✅ Middleware para JSON carregado com sucesso.');

// Rotas de autenticação
app.use('/auth', authRoutes);
console.log('✅ Rotas de autenticação carregadas.');

// Rotas do SuggestBook
app.use('/api', bookRoutes);
console.log('✅ Rotas de sugestão de livros carregadas.');

// Rota principal para verificar funcionamento do servidor
app.get('/', (req, res) => {
  console.log('⚡ Rota principal acessada.');
  res.status(200).send('✅ Servidor rodando corretamente!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado na porta ${PORT}`);
  console.log('🌐 Tentando conexão com o banco de dados...');
});

// Verificação de conexão com o banco de dados
pool.connect()
  .then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
    process.exit(1); // Finaliza o processo se a conexão falhar
  });

process.on('uncaughtException', (err) => {
  console.error('❌ Erro não tratado:', err.message);
  process.exit(1);
});
