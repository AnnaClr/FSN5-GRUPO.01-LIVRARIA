import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { Container, CartList, CartItem, QuantityControl, CheckoutButton } from './style';

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

export default Cart;