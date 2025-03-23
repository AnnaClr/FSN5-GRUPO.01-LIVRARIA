const express = require('express');
const BookController = require('../controllers/bookController'); // Controlador de livros
const router = express.Router();

// Rotas para o CRUD de livros
router.post('/books', BookController.addBook); // Criar livro
router.get('/books', BookController.getAllBooks); // Listar todos os livros
router.get('/books/:id', BookController.getBookById); // Buscar livro por ID
router.put('/books/:id', BookController.updateBook); // Atualizar livro por ID
router.delete('/books/:id', BookController.deleteBook); // Excluir livro por ID

module.exports = router;
