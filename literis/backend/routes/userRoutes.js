// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota de registro: POST /api/user/register
router.post('/register', userController.register);

// Rota de login: POST /api/user/login
router.post('/login', userController.login);

module.exports = router;
