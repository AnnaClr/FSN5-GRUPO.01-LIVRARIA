import styled from 'styled-components';

// Cores principais
const primaryColor = "rgb(67, 139, 255)";
const gradient = "linear-gradient(to right, #6a11cb, #2575fc)";
const textColor = "#333";
const white = "#fff";
const descriptionColor = "#555";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
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
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${white};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ItemInfo = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-size: 1.2rem;
    color: ${primaryColor};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${descriptionColor};
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: ${gradient};
    color: ${white};
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background: linear-gradient(to right, #2575fc, #6a11cb);
    }
  }

  span {
    font-size: 1rem;
    color: ${textColor};
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;

  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${primaryColor};
  }

  s {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const RemoveButton = styled.button`
  background: #dc3545;
  color: ${white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: #c82333;
  }
`;

export const CheckoutSummary = styled.div`
  width: 300px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: ${white};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const SummaryCard = styled.div`
  h3 {
    font-size: 1.2rem;
    color: ${primaryColor};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: ${textColor};
    margin: 0.5rem 0;
  }

  hr {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 1rem 0;
  }
`;

export const CheckoutButton = styled.button`
  background: ${gradient};
  color: ${white};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
    transform: translateY(-3px);
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;