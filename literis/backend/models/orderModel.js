const pool = require('../config/db');

// Função para criar um pedido
exports.createOrder = async (orderData) => {
  const { cart, paymentMethod } = orderData;

  try {
    // Insere o pedido na tabela `orders`
    const orderResult = await pool.query(
      'INSERT INTO orders (payment_method) VALUES ($1) RETURNING id',
      [paymentMethod]
    );
    const orderId = orderResult.rows[0].id;

    // Insere os itens na tabela `order_items`
    for (const item of cart) {
      await pool.query(
        'INSERT INTO order_items (order_id, title, quantity, price) VALUES ($1, $2, $3, $4)',
        [orderId, item.title, item.quantity, item.price]
      );
    }

    return { orderId };
  } catch (err) {
    throw new Error(`Erro ao criar pedido: ${err.message}`);
  }
};
