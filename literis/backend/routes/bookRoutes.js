const express = require('express');
const BookController = require('../controllers/bookController'); // Importa o controlador
const router = express.Router();

router.post('/books', BookController.addBook); // Define a rota para salvar os livros

module.exports = router; // Exporta as rotas
