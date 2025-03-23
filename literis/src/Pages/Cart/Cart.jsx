import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import CartImage from "../../imgs/Cart.png";
import { books } from "../../Vitrine/livros";
import {
  Container,
  CartWrapper,
  ScrollableContainer,
  CartTable,
  TableHeader,
  TableRow,
  TableCell,
  ItemContainer,
  ItemImage,
  ItemInfo,
  QuantityControl,
  RemoveButton,
  CheckoutSummary,
  SummaryCard,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  PaymentOptions,
  PaymentOption,
  DiscountInput,
  ApplyDiscountButton,
  InvalidCouponMessage,
  CheckoutButton,
  ModalOverlay,
  ModalContent,
  TitleContainer,
  TitleLine,
  EmptyCartContainer,
  EmptyCartImage,
  EmptyCartMessage,
  EmptyCartSubMessage,
  BackToStoreButton,
} from "./style";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [isInvalidCoupon, setIsInvalidCoupon] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 500);
  };

  const getBookDetails = (id) => {
    const book = books.find((livro) => livro.id === id);
    if (!book) {
      console.error(`Livro com ID ${id} não encontrado.`);
      return null;
    }
    return book;
  };

  const cartWithDetails = cart
    .map((item) => {
      const bookDetails = getBookDetails(item.id);
      if (!bookDetails) {
        console.error(`Detalhes do livro com ID ${item.id} não encontrados.`);
        return null;
      }
      return {
        ...item,
        ...bookDetails,
      };
    })
    .filter(Boolean);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const parseNumber = (value) => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
  };

  const calculateSubtotal = () => {
    return cartWithDetails.reduce((total, item) => {
      const price = parseNumber(item.price);
      const quantity = parseNumber(item.quantity);
      return total + price * quantity;
    }, 0);
  };
  
  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 69.99 ? 0 : 10.00;
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const discount = isDiscountApplied ? subtotal * 0.1 : 0; // 10% de desconto
    return (subtotal + shipping - discount).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => {
      const quantity = parseNumber(item.quantity);
      return total + quantity;
    }, 0);
  };

  const handleDiscountApply = () => {
    if (discountCode === "LIT3RIS") {
      setIsDiscountApplied(true);
      setIsInvalidCoupon(false);
    } else {
      setIsInvalidCoupon(true);
    }
  };

  return (
    <Container>
        {cart.length > 0 && ( // Exibe o título apenas se houver itens no carrinho
          <TitleContainer>
            <h1>Carrinho de Compras</h1>
            <TitleLine />
          </TitleContainer>
        )}
        {cart.length === 0 ? (
          <EmptyCartContainer>
            <EmptyCartImage src={CartImage} alt="Carrinho vazio" />
            <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
            <EmptyCartSubMessage>Adicione itens para continuar.</EmptyCartSubMessage>
            <BackToStoreButton>
              <Link to="/bookstore">VOLTAR PARA LOJA</Link>
            </BackToStoreButton>
          </EmptyCartContainer>
        ) : (
        <CartWrapper>
          <ScrollableContainer onScroll={handleScroll} isScrolling={isScrolling}>
            <CartTable>
              <TableHeader>
                <TableCell style={{ flex: 3, justifyContent: 'flex-start' ,textAlign: 'left' }}>PRODUTO</TableCell>
                <TableCell style={{ flex: 1 }}>Quantidade</TableCell>
                <TableCell style={{ flex: 1 }}>Total</TableCell>
                <TableCell style={{ flex: 1 }}>Ação</TableCell>
              </TableHeader>
              {cartWithDetails.map((item) => {
                const price = parseNumber(item.price);
                const quantity = parseNumber(item.quantity);
                const totalPrice = (price * quantity).toFixed(2);

                return (
                  <TableRow key={item.id}>
                    <TableCell style={{ flex: 3, textAlign: 'left' }}>
                      <ItemContainer>
                        <ItemImage src={item.image} alt={item.title} />
                        <ItemInfo>
                          <h3>{item.title}</h3>
                          <p>{item.author}</p>
                        </ItemInfo>
                      </ItemContainer>
                    </TableCell>
                    <TableCell style={{ flex: 1 }}>
                      <QuantityControl>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </QuantityControl>
                    </TableCell>
                    <TableCell style={{ flex: 1 }}>R$ {totalPrice}</TableCell>
                    <TableCell style={{ flex: 1 }}>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </RemoveButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </CartTable>
          </ScrollableContainer>
          <CheckoutSummary>
            <SummaryCard>
              <SummaryRow>
                <SummaryLabel>Total de Itens</SummaryLabel>
                <SummaryValue>{calculateTotalItems()}</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryLabel>Subtotal</SummaryLabel>
                <SummaryValue>R$ {calculateSubtotal().toFixed(2)}</SummaryValue>
              </SummaryRow>
              <SummaryRow>
              <SummaryLabel>Frete</SummaryLabel>
                <SummaryValue>
                  {calculateShipping() === 0 ? 'Grátis' : `R$ ${calculateShipping().toFixed(2)}`}
                </SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryLabel>Desconto</SummaryLabel>
                <SummaryValue>
                  - R${" "}
                  {isDiscountApplied
                    ? (calculateSubtotal() * 0.1).toFixed(2)
                    : "0.00"}
                </SummaryValue>
              </SummaryRow>
              <PaymentOptions>
                <PaymentOption
                  onClick={() => setPaymentMethod("creditCard")}
                  selected={paymentMethod === "creditCard"}
                >
                  Cartão
                </PaymentOption>
                <PaymentOption
                  onClick={() => setPaymentMethod("pix")}
                  selected={paymentMethod === "pix"}
                >
                  PIX
                </PaymentOption>
                <PaymentOption
                  onClick={() => setPaymentMethod("boleto")}
                  selected={paymentMethod === "boleto"}
                >
                  Boleto
                </PaymentOption>
              </PaymentOptions>
              <DiscountInput
                type="text"
                placeholder="Cupom de Desconto"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <ApplyDiscountButton onClick={handleDiscountApply}>
                Aplicar
              </ApplyDiscountButton>
              {isInvalidCoupon && (
                <InvalidCouponMessage>Cupom inválido</InvalidCouponMessage>
              )}
              <hr style={{ border: "1px solid #e0e0e0", margin: "1rem 0" }} />
              <SummaryRow>
                <SummaryLabel>TOTAL A PAGAR</SummaryLabel>
                <SummaryValue>R$ {calculateTotal()}</SummaryValue>
              </SummaryRow>
              <CheckoutButton onClick={handleCheckout}>
                Finalizar Compra
              </CheckoutButton>
            </SummaryCard>
          </CheckoutSummary>
        </CartWrapper>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Finalizar Compra</h3>
            {paymentMethod === "creditCard" && (
              <>
                <p>Forma de Pagamento: Cartão de Crédito</p>
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  maxLength="16"
                />
                <input
                  type="text"
                  placeholder="Validade (MM/AA)"
                  maxLength="5"
                />
                <input type="text" placeholder="CVV" maxLength="3" />
              </>
            )}

            {paymentMethod === "pix" && (
              <>
                <p>Forma de Pagamento: PIX</p>
                <p>
                  Você será redirecionado para a página do PIX após confirmar o
                  pagamento.
                </p>
              </>
            )}

            {paymentMethod === "boleto" && (
              <>
                <p>Forma de Pagamento: Boleto</p>
                <p>O boleto será gerado e enviado para o seu e-mail.</p>
              </>
            )}

            <button
              onClick={() => {
                toast.success("Compra finalizada com sucesso!");
                clearCart();
                closeModal();
              }}
            >
              Confirmar Pagamento
            </button>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Cart;
