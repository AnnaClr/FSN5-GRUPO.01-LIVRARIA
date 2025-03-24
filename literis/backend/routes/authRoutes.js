const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', AuthController.register);

module.exports = router;
