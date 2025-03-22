const BookModel = require('../models/bookModel'); // Importa o modelo responsável pela interação com o banco de dados

const BookController = {
  async addBook(req, res) {
    console.log('📥 Dados recebidos do frontend:', req.body); // Log para depuração, exibindo os dados enviados

    try {
      const bookData = req.body; // Captura os dados enviados pelo formulário no frontend
      const newBook = await BookModel.create(bookData); // Chama o modelo para salvar os dados no banco
      console.log('📦 Livro salvo no banco:', newBook); // Loga os dados salvos com sucesso no banco de dados

      // Responde com status 201 (Criado) e retorna o livro salvo
      res.status(201).json({ 
        message: 'Book added successfully!', 
        book: newBook 
      });
    } catch (error) {
      // Em caso de erro, loga a mensagem no console e responde ao frontend com status 500 (Erro do Servidor)
      console.error('❌ Erro ao salvar livro:', error.message);
      res.status(500).json({ 
        message: 'Falha ao salvar o livro.',
        error: error.message // Retorna a mensagem de erro para depuração
      });
    }
  },
};

module.exports = BookController; // Exporta o controlador para uso nas rotas
