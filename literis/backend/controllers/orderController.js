const Order = require('../models/OrderModel');

// Função para criar um pedido
exports.createOrder = async (req, res) => {
  try {
    const orderId = await Order.createOrder(req.body);
    res.status(201).json({ message: 'Pedido criado com sucesso!', orderId });
  } catch (err) {
    res.status(500).json({ message: `Erro ao criar pedido: ${err.message}` });
  }
};
