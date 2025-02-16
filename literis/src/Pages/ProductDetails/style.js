import styled from 'styled-components';

// Cores principais
const primaryColor = "rgb(67, 139, 255)";
const gradient = "linear-gradient(to right, #6a11cb, #2575fc)";
const textColor = "#333";
const white = "#fff";
const descriptionColor = "#555";
// const priceColor = "#d9534f";
// const cartButtonColor = "#4285F4";
// const reviewButtonColor = "#34A853";

// Estilos para a página de detalhes do produto
export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1500px;
  height: 800px;
  margin: 0 auto;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: ${primaryColor};
  margin-bottom: 0.5rem;
`;

export const ProductAuthor = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${descriptionColor};
  margin-bottom: 1.5rem;
  text-align: justify;
  width: 550px;
`;

export const ProductDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProductDetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${textColor};
`;

export const ProductCard = styled.div`
  width: 700px;
  height: 450px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const ProductCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ProductCardDiscount = styled.div`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProductCardShipping = styled.div`
  color: #666;
  margin-bottom: 1rem;
`;

export const ProductCardStock = styled.div`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ProductCardQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  input {
    width: 60px;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

export const AddToCartButton = styled.button`
  background: ${gradient};
  color: ${white};
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;

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

  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
    transform: translateY(-3px);
  }
`;

export const ProductCardFooter = styled.div`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;

  p {
    margin: 0.2rem 0;
  }
`;