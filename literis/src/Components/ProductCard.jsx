import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h3>{product.title}</h3>
      <p>{product.author}</p>
      <StyledLink to={`/product/${product.id}`}>Ver Detalhes</StyledLink>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ProductCard;