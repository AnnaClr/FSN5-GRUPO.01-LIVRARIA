import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import {
  Container,
  CartWrapper,
  ScrollableContainer,
  CartList,
  CartItem,
  ItemImage,
  ItemInfo,
  QuantityControl,
  PriceInfo,
  RemoveButton,
  CheckoutSummary,
  SummaryCard,
  CheckoutButton,
  ClearCartButton
} from './style';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    toast.success('Compra finalizada com sucesso!');
    clearCart();
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalDiscount = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal * 0.1).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const totalDiscount = parseFloat(calculateTotalDiscount());
    return (subtotal - totalDiscount).toFixed(2);
  };

  return (
    <Container>
      <h1>CARRINHO DE COMPRAS</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <CartWrapper>
          <ScrollableContainer>
            <CartList>
              {cart.map((item) => (
                <CartItem key={item.id}>
                  <ItemImage src={item.image} alt={item.title} />
                  <ItemInfo>
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                    <PriceInfo>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                      {item.originalPrice && <s>R$ {item.originalPrice.toFixed(2)}</s>}
                    </PriceInfo>
                  </ItemInfo>
                  <QuantityControl>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </QuantityControl>
  
                  <RemoveButton onClick={() => removeFromCart(item.id)}>Remover</RemoveButton>
                </CartItem>
              ))}
            </CartList>
          </ScrollableContainer>
          <CheckoutSummary>
            <SummaryCard>
              <h3>RESUMO DO PEDIDO</h3>
              <p>Total de Itens: {cart.length}</p>
              <p>Quantidade Total: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
              <p>Subtotal: <strong>R$ {calculateSubtotal()}</strong></p>
              <p>Desconto: <strong>R$ {calculateTotalDiscount()}</strong></p>
              <hr />
              <p>Total a Pagar: <strong>R$ {calculateTotal()}</strong></p>
              <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
              <ClearCartButton onClick={clearCart}>Limpar Carrinho</ClearCartButton>
            </SummaryCard>
          </CheckoutSummary>
        </CartWrapper>
      )}
    </Container>
  );
};

export default Cart;