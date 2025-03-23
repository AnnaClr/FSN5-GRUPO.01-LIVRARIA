const BookModel = require('../models/bookModel');

const BookController = {
  async addBook(req, res) {
    try {
      console.log("📥 Recebendo dados para novo livro:", req.body);
      const newBook = await BookModel.create(req.body);
      res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
      console.error("❌ Erro ao adicionar livro:", error.message);
      res.status(500).json({ message: 'Erro ao adicionar livro.', error: error.message });
    }
  },

  async getAllBooks(req, res) {
    try {
      console.log("📥 Fazendo requisição para buscar todos os livros...");
      const books = await BookModel.findAll();
      res.status(200).json({ books });
    } catch (error) {
      console.error("❌ Erro ao buscar livros:", error.message);
      res.status(500).json({ message: 'Erro ao buscar livros.', error: error.message });
    }
  },

  async getBookById(req, res) {
    try {
      const { id } = req.params;
      console.log(`🔍 Fazendo requisição para buscar livro com ID ${id}...`);
      const book = await BookModel.findById(id);
      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }
      res.status(200).json({ book });
    } catch (error) {
      console.error("❌ Erro ao buscar livro:", error.message);
      res.status(500).json({ message: 'Erro ao buscar livro.', error: error.message });
    }
  },

  async updateBook(req, res) {
    try {
      const { id } = req.params;
      console.log(`📥 Recebendo dados para atualizar livro com ID ${id}:`, req.body);
      const updatedBook = await BookModel.update(id, req.body);
      if (!updatedBook) {
        return res.status(404).json({ message: 'Livro não encontrado para atualização.' });
      }
      console.log("✅ Livro atualizado com sucesso:", updatedBook);
      res.status(200).json({ message: 'Livro atualizado com sucesso!', book: updatedBook });
    } catch (error) {
      console.error("❌ Erro ao atualizar livro:", error.message);
      res.status(500).json({ message: 'Erro ao atualizar o livro.', error: error.message });
    }
  },

  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      console.log(`🗑 Excluindo livro com ID ${id}...`);
      const deletedBook = await BookModel.delete(id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Livro não encontrado para exclusão.' });
      }
      console.log("✅ Livro excluído com sucesso:", deletedBook);
      res.status(200).json({ message: 'Livro excluído com sucesso!', book: deletedBook });
    } catch (error) {
      console.error("❌ Erro ao excluir livro:", error.message);
      res.status(500).json({ message: 'Erro ao excluir o livro.', error: error.message });
    }
  },
};

module.exports = BookController;
