import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { books } from '../../Vitrine/livros';
import { FaBook, FaLanguage, FaBuilding, FaCalendarAlt } from 'react-icons/fa'; // Importando ícones
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductAuthor,
  ProductDescription,
//   ProductPrice,
  ProductDetailsSection,
  ProductDetailsItem,
  ProductCard,
  ProductCardPrice,
  ProductCardDiscount,
  ProductCardShipping,
  ProductCardStock,
  ProductCardQuantity,
  AddToCartButton,
  ProductCardFooter,
} from './style';

const ProductDetails = () => {
  const { id } = useParams();
  const livro = books.find((book) => book.id === parseInt(id));

  if (!livro) {
    return <div>Livro não encontrado.</div>;
  }

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...livro, quantity });
    toast.success('Livro adicionado ao carrinho!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <ProductDetailsContainer>
      <ProductImage src={livro.image} alt={livro.title} />
      <ProductInfo>
        <ProductTitle>{livro.title}</ProductTitle>
        <ProductAuthor>{livro.author}</ProductAuthor>
        <ProductDescription>{livro.fullDescription}</ProductDescription>
        
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
      </ProductInfo>

      <ProductCard>
        <ProductCardPrice>
          <span>Kindle: R$ {livro.kindlePrice}</span>
          <span>Físico: R$ {livro.physicalPrice}</span>
        </ProductCardPrice>
        {livro.discount && (
          <ProductCardDiscount>
            <span>Desconto: {livro.discount}%</span>
          </ProductCardDiscount>
        )}
        <ProductCardShipping>
          Frete grátis a partir de R$ 50,00
        </ProductCardShipping>
        <ProductCardStock>
          {livro.stock > 0 ? 'Em estoque' : 'Fora de estoque'}
        </ProductCardStock>
        <ProductCardQuantity>
          <label>Quantidade:</label>
          <input
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