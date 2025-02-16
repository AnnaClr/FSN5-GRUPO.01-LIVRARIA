import React, { useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = { id: 1, title: 'Livro 1', author: 'Autor 1', description: 'Descrição longa do Livro 1' };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <Container>
      <h1>{product.title}</h1>
      <h2>{product.author}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default ProductDetail;