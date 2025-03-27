import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

// Paleta de cores
const colors = {
  primary: "#1e5aff",
  secondary: "#3b3b3b",
  background: "#ffffff",
  background2: "#f5f5f5",
  text: "#374151",
  accent: "#1e5aff",
};

// Estilos do carrinho de compras
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const TitleContainer = styled.div`
  text-align: left;
  margin-bottom: 4rem;
  color: ${colors.secondary};
`;

export const TitleLine = styled.div`
  width: 80px;
  height: 2px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  margin-top: 0.5rem;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
`;

export const EmptyCartImage = styled.img`
  width: 400px;
  height: auto;
`;

export const EmptyCartMessage = styled.h2`
  font-size: 1.5rem;
  color: ${colors.text};
  margin-bottom: 0;
`;

export const EmptyCartSubMessage = styled.p`
  font-size: 1rem;
  color: ${colors.secondary};
  margin-bottom: 1.5rem;
`;

export const BackToStoreButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 40px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.text};
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  height: 100%;
`;

export const ScrollableContainer = styled.div`
  flex: 2;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 8px;
    transition: opacity 0.3s ease;
    opacity: ${({ isScrolling }) => (isScrolling ? 1 : 0)};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.background2};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
    transition: background 0.3s ease;
  }
`;

export const CartTable = styled.div`
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color:rgb(149, 149, 149);
  text-transform: uppercase;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${colors.background2};
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.background2};
  }
`;

export const TableCell = styled.div`
  flex: ${({ flex }) => flex || 1};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) => (textAlign === 'left' ? 'flex-start' : 'center')};
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${colors.text};
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    color: ${colors.text};
    border: 1px solid ${colors.background2};
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: ${colors.background2};
    }

    &:disabled {
      background: ${colors.background2};
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  span {
    font-size: 1rem;
    color: ${colors.text};
  }
`;

export const RemoveButton = styled(FaTrash)`
  color: ${colors.text};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #dc3545;
  }
`;

export const CheckoutSummary = styled.div`
  flex: 1;
  height: 100%;
  padding: 1.5rem;
  border: 1px solid ${colors.background2};
  border-radius: 8px;
  background-color: ${colors.background};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryLabel = styled.span`
  font-size: 0.9rem;
  color: ${colors.text};
`;

export const SummaryValue = styled.span`
  font-size: 0.9rem;
  color: ${colors.text};
  font-weight: bold;
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

export const PaymentOption = styled.button`
  background: ${({ selected }) => (selected ? colors.primary : colors.background2)};
  color: ${({ selected }) => (selected ? colors.background : colors.text)};
  border: 1px solid ${colors.background2};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.background};
  }
`;

export const DiscountInput = styled.input`
  width: 58%;
  padding: 0.5rem;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 5px;
  font-size: 1rem;
`;

export const ApplyDiscountButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 30%;
  margin-top: 0.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.text};
  }
`;

export const InvalidCouponMessage = styled.p`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

export const CheckoutButton = styled.button`
  background: linear-gradient(to right, #34a853, #2d9147);
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.5s ease;
    z-index: 0;
  }

  &:hover::after {
    width: 0;
    height: 0;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: ${colors.background};
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.2rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${colors.background2};
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    background: ${colors.primary};
    color: ${colors.background};
    border: none;
    padding: 0.7rem 1.2rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: ${colors.text};
    }
  }
`;