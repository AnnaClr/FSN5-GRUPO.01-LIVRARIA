import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

// Nova paleta de cores
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "rgb(255, 255, 255)",
  background2: "rgb(245, 245, 245)",
  background3: "rgb(0, 136, 255)",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

// Estilos do carrinho de compras
export const Container = styled.div`
  padding: 20px;
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 2rem;
    color: ${colors.primary};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: ${colors.text};
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

export const ScrollableContainer = styled.div`
  flex: 1;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.background2};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: darken(${colors.primary}, 10%);
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled.div`
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${colors.background};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ItemImage = styled.img`
  width: auto;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  flex: 1;
  text-align: left;

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
    border: 1px solid ${colors.backgroundSecondary};
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: ${colors.backgroundSecondary};
    }

    &:disabled {
      background: ${colors.backgroundSecondary};
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  span {
    font-size: 1rem;
    color: ${colors.text};
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${colors.primary};
  }

  s {
    font-size: 0.9rem;
    color: ${colors.secondary};
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
  width: 550px;
  height: 400px;
  padding: 1.5rem;
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  background-color: ${colors.background};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SummaryCard = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: ${colors.text};
    margin: 0.5rem 0;
  }

  hr {
    border: 0;
    border-top: 1px solid ${colors.backgroundSecondary};
    margin: 1rem 0;
  }

  strong {
    color: ${colors.primary};
  }
`;

export const CheckoutButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: darken(${colors.primary}, 10%);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ClearCartButton = styled.button`
  background: ${colors.background3};
  color: ${colors.background};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: darken(${colors.background3}, 10%);
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
    border: 1px solid ${colors.backgroundSecondary};
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
      background: darken(${colors.primary}, 10%);
    }
  }
`;