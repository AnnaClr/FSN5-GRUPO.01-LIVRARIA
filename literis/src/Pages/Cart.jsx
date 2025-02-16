import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    toast.success('Compra finalizada com sucesso!');
    clearCart();
  };

  return (
    <Container>
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <QuantityControl>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </QuantityControl>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </CartItem>
            ))}
          </CartList>
          <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckoutButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

export default Cart;