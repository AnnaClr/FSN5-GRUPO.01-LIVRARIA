import styled from "styled-components";

// Paleta de cores
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "#FFFFFF",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

const gradientBackground = "linear-gradient(to right, rgb(255, 255, 255), rgb(240, 240, 240))";
const gradientBackground3 = "linear-gradient(to left, rgb(0, 136, 255), rgb(73, 137, 255))";

// Estilos
export const ProductDetailsContainer = styled.div`
  background: ${gradientBackground};
  display: flex;
  gap: 2rem;
  padding: 80px 100px;
  max-width: 1500px;
  height: auto;
  margin: 0 auto;
  align-items: flex-start;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 230px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  transition: transform 0.3s ease;
`;

export const ProductInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const ProductTitle = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
  /* position: relative; */

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    background: ${gradientBackground3};
    margin-top: 0.5rem;
  }
`;

export const ProductAuthor = styled.p`
  font-size: 1.2rem;
  color: ${colors.text};
  font-style: italic;
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  text-align: justify;
  width: 100%;
  max-width: 600px;
  line-height: 1.6;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 500px;
  padding: 1.5rem;
  background: ${colors.background};
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
`;

export const PriceOptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PriceOption = styled.div`
  padding: 1rem;
  border: 1px solid ${({ selected }) => (selected ? colors.primary : "#ddd")};
  border-radius: 5px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#f0f8ff" : "white")};
  width: 150px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: all 0.3s ease;

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &:hover {
    background: ${colors.primary};
    color: white;
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
  color: ${colors.text};
  margin-bottom: 1rem;
`;

export const ProductCardStock = styled.div`
  color: ${({ isOutOfStock }) => (isOutOfStock ? "red" : "green")};
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
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  }
`;

export const AddToCartButton = styled.button`
  background: ${colors.primary};
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

export const BuyNowButton = styled.button`
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

export const ProductCardFooter = styled.div`
  font-size: 0.8rem;
  color: ${colors.text};
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
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ filled }) => (filled ? "#FFD700" : "#ccc")};
  }
`;

export const ProductDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 80%;
    height: 1px;
    background-color: ${colors.backgroundSecondary};
    margin-top: 1rem;
  }
`;

export const ProductDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${colors.text};

  svg {
    color: ${colors.primary};
    font-size: 1.5rem;
  }

  span {
    text-align: center;
  }
`;