import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import { books } from '../../Vitrine/livros';
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
  ClearCartButton,
  ModalOverlay,
  ModalContent
} from './style';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  // Função para obter os detalhes completos de um livro pelo ID
  const getBookDetails = (id) => {
    const book = books.find((livro) => livro.id === id);
    if (!book) {
      console.error(`Livro com ID ${id} não encontrado.`);
      return null;
    }
    return book;
  };

  // Adiciona os detalhes dos livros ao carrinho
  const cartWithDetails = cart.map((item) => {
    const bookDetails = getBookDetails(item.id);
    if (!bookDetails) {
      console.error(`Detalhes do livro com ID ${item.id} não encontrados.`);
      return null;
    }
    return {
      ...item,
      ...bookDetails,
    };
  }).filter(Boolean);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Converte uma string para número, retornando 0 se for inválida
  const parseNumber = (value) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Calcula o frete (grátis se o total for >= 69.99, senão R$ 10.00)
  const calculateShipping = () => {
    const total = cartWithDetails.reduce((total, item) => {
      const price = parseNumber(item.price);
      const quantity = parseNumber(item.quantity);
      return total + price * quantity;
    }, 0);
    return total >= 69.99 ? 0 : 10.00;
  };

  // Calcula o total a pagar (preço do livro * quantidade + frete)
  const calculateTotal = () => {
    const total = cartWithDetails.reduce((total, item) => {
      const price = parseNumber(item.price); // Usa o preço correto (e-book ou físico)
      const quantity = parseNumber(item.quantity);
      return total + price * quantity;
    }, 0);
    const shipping = calculateShipping();
    return (total + shipping).toFixed(2);
  };

  // Calcula a quantidade total de itens no carrinho
  const calculateTotalItems = () => {
    return cart.reduce((total, item) => {
      const quantity = parseNumber(item.quantity);
      return total + quantity;
    }, 0);
  };

  // Validação para aceitar apenas números
  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
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
              {cartWithDetails.map((item) => {
                const price = parseNumber(item.price);
                const quantity = parseNumber(item.quantity);
                const totalPrice = (price * quantity).toFixed(2);

                return (
                  <CartItem key={item.id}>
                    <ItemImage src={item.image} alt={item.title} />
                    <ItemInfo>
                      <h3>{item.title}</h3>
                      <p>{item.author}</p>
                      <PriceInfo>
                        <span>R$ {totalPrice}</span>
                      </PriceInfo>
                    </ItemInfo>
                    <QuantityControl>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </QuantityControl>
                    <RemoveButton onClick={() => removeFromCart(item.id)} />
                  </CartItem>
                );
              })}
            </CartList>
          </ScrollableContainer>
          <CheckoutSummary>
            <SummaryCard>
              <h3>RESUMO DO PEDIDO</h3>
              <p>Total de Itens: {calculateTotalItems()}</p>
              <p>Total a Pagar: <strong>R$ {calculateTotal()}</strong></p>
              <p>Frete: {calculateShipping() === 0 ? 'Grátis' : `R$ ${calculateShipping().toFixed(2)}`}</p>
              <hr />
              <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
              <ClearCartButton onClick={clearCart}>Limpar Carrinho</ClearCartButton>
              <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'gray' }}>
                Aplique um Código de cupom, pontos LITERIS na próxima etapa.
              </p>
            </SummaryCard>
          </CheckoutSummary>
        </CartWrapper>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Finalizar Compra</h3>
            <p>Escolha a forma de pagamento:</p>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            >
              <option value="creditCard">Cartão de Crédito</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto</option>
            </select>

            {paymentMethod === 'creditCard' && (
              <>
                <p>Forma de Pagamento: Cartão de Crédito</p>
                <input type="text" placeholder="Número do Cartão" onInput={handleNumberInput} maxLength="16" />
                <input type="text" placeholder="Validade (MM/AA)" maxLength="5" />
                <input type="text" placeholder="CVV" onInput={handleNumberInput} maxLength="3" />
                <input type="text" placeholder="CEP" onInput={handleNumberInput} maxLength="8" />
                <input type="text" placeholder="Endereço" />
              </>
            )}

            {paymentMethod === 'pix' && (
              <>
                <p>Forma de Pagamento: PIX</p>
                <p>Você será redirecionado para a página do PIX após confirmar o pagamento.</p>
              </>
            )}

            {paymentMethod === 'boleto' && (
              <>
                <p>Forma de Pagamento: Boleto</p>
                <p>O boleto será gerado e enviado para o seu e-mail.</p>
              </>
            )}

            <button onClick={() => {
              toast.success('Compra finalizada com sucesso!');
              clearCart();
              closeModal();
            }}>
              Confirmar Pagamento
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Cart;