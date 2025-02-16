import styled from 'styled-components';

// Cores principais
const primaryColor = "rgb(67, 139, 255)";
const gradient = "linear-gradient(to right, #6a11cb, #2575fc)";
const textColor = "#333";
const white = "#fff";
const descriptionColor = "#555";

// Estilos para a página de detalhes do produto
export const ProductDetailsContainer = styled.div`
  background-color: ${white};
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1500px;
  height: auto;
  margin: 0 auto;
  align-items: flex-start;

  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
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
  justify-content: space-between;
  gap: 1rem;
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


export const  ProductCardDiscount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const PriceOption = styled.div`
  padding: 1rem;
  border: 1px solid ${({ selected }) => (selected ? primaryColor : '#ddd')};
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  background: ${({ selected }) => (selected ? '#f0f8ff' : white)};
  width: 200px

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &:hover {
    background:rgb(220, 203, 255);
  }
`;

export const DiscountPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: red;
  font-size: 0.9rem;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #666;
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
    width: 100%;
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

export const BuyNowButton = styled.button`
  background: linear-gradient(to right, #34a853, #2d9147);
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
    background: linear-gradient(to right, #2d9147, #34a853);
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

export const RatingSection = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const RatingSubmitButton = styled.button`
  background: ${gradient};
  color: ${white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #2575fc, #6a11cb);
  }
`;