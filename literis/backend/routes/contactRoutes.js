const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

// Middleware para log de cada requisição na rota
router.use((req, res, next) => {
  console.log(`📩 [CONTACT] Requisição recebida: ${req.method} ${req.originalUrl}`);
  console.log(`📋 Dados do corpo:`, req.body);
  next();
});

router.post('/contacts', ContactController.saveContact);

module.exports = router;
