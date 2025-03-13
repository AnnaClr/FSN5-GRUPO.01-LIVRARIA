import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaBook, FaBuilding, FaCalendarAlt } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { books } from '../../Vitrine/livros';
import { useCart } from '../../Context/CartContext';
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductAuthor,
  RatingSection,
  RatingStars,
  ProductDescription,
  ProductDetailsSection,
  ProductDetailsItem,
  ProductCard,
  PriceOptionsContainer,
  PriceOption,
  ProductCardShipping,
  ProductCardStock,
  ProductCardQuantity,
  AddToCartButton,
  BuyNowButton,
  ProductCardFooter,
} from './style';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const livro = books.find((book) => book.id === parseInt(id));

  if (!livro) {
    return <div>Livro não encontrado.</div>;
  }

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVersion, setSelectedVersion] = useState('e-book');

  const handleAddToCart = () => {
    const price = selectedVersion === 'e-book' ? livro.ebookPrice : livro.physicalPrice;

    addToCart({ 
      ...livro, 
      quantity, 
      version: selectedVersion, 
      price
    });

    toast.success('Livro adicionado ao carrinho!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleBuyNow = () => {
    const price = selectedVersion === 'e-book' ? livro.ebookPrice : livro.physicalPrice;

    addToCart({ 
      ...livro, 
      quantity, 
      version: selectedVersion, 
      price
    });

    navigate('/cart');
  };

  const isOutOfStock = livro.stock <= 0;

  return (
    <ProductDetailsContainer>
      {/* Imagem do produto */}
      <ProductImage src={livro.image} alt={livro.title} />

      {/* Informações do produto */}
      <ProductInfo>
        <ProductTitle>{livro.title}</ProductTitle>
        <ProductAuthor>{livro.author}</ProductAuthor>

        {/* Avaliação */}
        <RatingSection>
          <RatingStars>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                color={star <= livro.review ? '#FFD700' : '#ccc'}
              />
            ))}
          </RatingStars>
          <span>{livro.review} | {livro.totalReviews} avaliações</span>
        </RatingSection>

        {/* Descrição completa */}
        <ProductDescription>{livro.FullDescription}</ProductDescription>
        <hr />

        {/* Detalhes adicionais */}
        <ProductDetailsSection>
            <ProductDetailsItem>
              <FaBook color='rgb(30, 90, 255)' />
              <span>{livro.pages} páginas</span>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <MdLanguage color='rgb(30, 90, 255)' />
              <span>{livro.language}</span>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <FaBuilding color='rgb(30, 90, 255)' />
              <span>{livro.publisher}</span>
            </ProductDetailsItem>
            <ProductDetailsItem>
              <FaCalendarAlt color='rgb(30, 90, 255)' />
              <span>Publicado em {livro.publication}</span>
            </ProductDetailsItem>
          </ProductDetailsSection>
      </ProductInfo>

      {/* Card de compra */}
      <ProductCard>
        {/* Opções de preço */}
        <PriceOptionsContainer>
          <PriceOption
            onClick={() => !isOutOfStock && setSelectedVersion('e-book')}
            selected={selectedVersion === 'e-book'}
            disabled={isOutOfStock}
          >
            <div className="version-label">E-book</div>
            <div className="version-price">R$ {livro.ebookPrice}0</div>
          </PriceOption>
          <PriceOption
            onClick={() => !isOutOfStock && setSelectedVersion('físico')}
            selected={selectedVersion === 'físico'}
            disabled={isOutOfStock}
          >
            <div className="version-label">Físico</div>
            <div className="version-price">R$ {livro.physicalPrice}0</div>
          </PriceOption>
        </PriceOptionsContainer>

        {/* Frete */}
        <ProductCardShipping>
          Frete grátis a partir de R$ 69,99
        </ProductCardShipping>

        {/* Estoque */}
        <ProductCardStock isOutOfStock={isOutOfStock}>
          {isOutOfStock ? 'FORA DE ESTOQUE' : 'EM ESTOQUE'}
        </ProductCardStock>

        {/* Quantidade */}
        <ProductCardQuantity>
          <input
            placeholder="Quantidade:"
            type="number"
            min="1"
            max={livro.stock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            disabled={isOutOfStock}
          />
        </ProductCardQuantity>

        {/* Botões de ação */}
        <AddToCartButton onClick={handleAddToCart} disabled={isOutOfStock}>
          Adicionar ao Carrinho
        </AddToCartButton>
        <BuyNowButton disabled={isOutOfStock}>
          <Link to='/cart' onClick={handleAddToCart}>Comprar Agora</Link>
        </BuyNowButton>

        {/* Rodapé do card */}
        <ProductCardFooter>
          <p>Enviado por: Literis.com.br</p>
          <p>Vendido por: Literis.com.br</p>
          <p>Pagamento: Transação segura</p>
          <p>Elegível para Devolução, Reembolso ou substituição em até 30 dias após o recebimento</p>
        </ProductCardFooter>
      </ProductCard>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;