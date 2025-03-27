const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Rota POST para criar pedido
router.post('/orders', orderController.createOrder);

module.exports = router;
