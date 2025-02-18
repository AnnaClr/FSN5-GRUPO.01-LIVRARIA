import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { books } from '../../Vitrine/livros';
import { FaBook, FaLanguage, FaBuilding, FaCalendarAlt, FaStar } from 'react-icons/fa';
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductAuthor,
  ProductDescription,
  ProductDetailsSection,
  ProductDetailsItem,
  ProductCard,
  ProductCardPrice,
  ProductCardDiscount,
  ProductCardShipping,
  ProductCardStock,
  ProductCardQuantity,
  AddToCartButton,
  BuyNowButton,
  ProductCardFooter,
  PriceOption,
  OriginalPrice,
  DiscountPrice,
  RatingSection,
  RatingStars,
  // RatingInput,
  RatingSubmitButton,
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
  const [selectedVersion, setSelectedVersion] = useState('e-book'); // Estado para a versão selecionada
  const [userRating, setUserRating] = useState(0); // Estado para a avaliação do usuário

  const handleAddToCart = () => {
    addToCart({ ...livro, quantity, version: selectedVersion });
    toast.success('Livro adicionado ao carrinho!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleRatingSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar a avaliação do usuário
    toast.success('Avaliação enviada com sucesso!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleBuyNow = () => {
    addToCart({ ...livro, quantity, version: selectedVersion });
    navigate('/checkout');
  };

  const calculateDiscountPrice = (price, discount) => {
    return (price * (1 - discount / 100)).toFixed(2);
  };

  return (
    <ProductDetailsContainer>
      <ProductImage src={livro.image} alt={livro.title} />
      <ProductInfo>
        <ProductTitle>{livro.title}</ProductTitle>
        <ProductAuthor>{livro.author}</ProductAuthor>
        <RatingSection>
          <FaStar color="#FFD700" />
          <span>{livro.review} | {livro.totalReviews} avaliações</span>
        </RatingSection>
        <ProductDescription>{livro.FullDescription}</ProductDescription>
        
        <ProductDetailsSection>
          <ProductDetailsItem>
            <FaBook /> <strong>Páginas:</strong> {livro.pages}
          </ProductDetailsItem>
          <ProductDetailsItem>
            <FaLanguage /> <strong>Idioma:</strong> {livro.language}
          </ProductDetailsItem>
          <ProductDetailsItem>
            <FaBuilding /> <strong>Editora:</strong> {livro.publisher}
          </ProductDetailsItem>
          <ProductDetailsItem>
            <FaCalendarAlt /> <strong>Publicação:</strong> {livro.publicationDate}
          </ProductDetailsItem>
        </ProductDetailsSection>

        {/* Seção de Avaliação do Usuário */}
        <RatingSection>
            <h3>Avalie este livro:</h3>
            <RatingStars>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  color={star <= userRating ? '#FFD700' : '#ccc'}
                  onClick={() => setUserRating(star)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </RatingStars>
            <RatingSubmitButton onClick={handleRatingSubmit}>
              Enviar Avaliação
            </RatingSubmitButton>
        </RatingSection>
      </ProductInfo>

      <ProductCard>
        <PriceOption
          onClick={() => setSelectedVersion('e-book')}
          selected={selectedVersion === 'e-book'}
        >
          {/* <span>E-book: R$ {calculateDiscountPrice(livro.ebookPrice, livro.discount)}</span> */}
          <span>E-book: R$ 39,99</span>
          {livro.discount > 0 && (
            <DiscountPrice>
              {/* <span>{livro.discount}% de desconto</span> */}
              <OriginalPrice>R$ {livro.ebookPrice}</OriginalPrice>
              <span>-25%</span>
            </DiscountPrice>
          )}
        </PriceOption>
        <PriceOption
          onClick={() => setSelectedVersion('físico')}
          selected={selectedVersion === 'físico'}
        >
          {/* <span>Físico: R$ {calculateDiscountPrice(livro.physicalPrice, livro.discount)}</span> */}
          <span>Físico: R$ 69,99</span>
          {livro.discount > 0 && (
            <DiscountPrice>
              {/* <span>{livro.discount}% de desconto</span> */}
              <OriginalPrice>R$ {livro.physicalPrice}</OriginalPrice>
              <span>-25%</span>
            </DiscountPrice>
          )}
        </PriceOption>
        <ProductCardShipping>
          Frete grátis a partir de R$ 79,99
        </ProductCardShipping>
        <ProductCardStock>
          {livro.stock > 0 ? 'EM ESTOQUE' : 'FORA DE ESTOQUE'}
          {/* EM ESTOQUE */}
        </ProductCardStock>
        <ProductCardQuantity>
          <input
            placeholder="Quantidade:"
            type="number"
            min="1"
            max={livro.stock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </ProductCardQuantity>
        <AddToCartButton onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </AddToCartButton>
        <BuyNowButton onClick={handleBuyNow}>
          Comprar Agora
        </BuyNowButton>
        <ProductCardFooter>
          <p>Enviado por: Literis.com.br</p>
          <p>Vendido por: Literis.com.br</p>
          <p>Devolução: Elegível para Devolução, Reembolso ou substituição em até 30 dias após o recebimento</p>
          <p>Pagamento: Transação segura</p>
        </ProductCardFooter>
      </ProductCard>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;