import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

import AstronautCupom from '../../assets/AstronautCupom.png';
import Cupom2 from '../../assets/Cupom2.png';
import MoonCupom from '../../assets/MoonCupom.png';

import {
  newBooks,
  oscarBooks,
  authors,
  offers,
} from '../../Vitrine/livros';

import {
  HomeContainer,
  SectionTitle,
  BookGrid,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
  BookPrice,
  DetailsButton,
  AuthorGrid,
  AuthorCard,
  AuthorImage,
  AuthorName,
  ArrowButton,
  CupomImage,
  CupomCard,
  OfferGrid,
  OfferCard,
  // AboutGrid,
  // AboutCard,
  // AboutIcon,
  // AboutText,
  SeeMoreButton,
  SecondaryNav, 
  SecondaryNavLink, 
  MenuCategoryIcon 
} from './style';

const Home = () => {
  const booksPerPage = 5;

  // Estados para paginação de cada seção
  const [currentNewBooksIndex, setCurrentNewBooksIndex] = useState(0);
  const [currentOscarBooksIndex, setCurrentOscarBooksIndex] = useState(0);
  const [currentAuthorsIndex, setCurrentAuthorsIndex] = useState(0);
  const [currentOffersIndex, setCurrentOffersIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBooks = () => {
    setCurrentIndex((prev) => (prev + 3) % (newBooks.length - 2));
  };

  const prevBooks = () => {
    setCurrentIndex((prev) => (prev - 3 + (newBooks.length - 2)) % (newBooks.length - 2));
  };

  // Livros visíveis em cada seção
  const visibleNewBooks = newBooks.slice(currentNewBooksIndex, currentNewBooksIndex + booksPerPage);
  const visibleOscarBooks = oscarBooks.slice(currentOscarBooksIndex, currentOscarBooksIndex + booksPerPage);
  const visibleAuthors = authors.slice(currentAuthorsIndex, currentAuthorsIndex + booksPerPage);
  const visibleOffers = offers.slice(currentOffersIndex, currentOffersIndex + booksPerPage);

  return (
    <HomeContainer>
    
        {/* Categorias, Mais Vendidos, Livros por Idiomas, Principais Autores */}
            <SecondaryNav>
                <SecondaryNavLink to="/categories"> 
                <MenuCategoryIcon> <IoMdMenu /> </MenuCategoryIcon>
                CATEGORIAS </SecondaryNavLink>
                <SecondaryNavLink to="/best-sellers">MAIS VENDIDOS</SecondaryNavLink>
                <SecondaryNavLink to="/books-by-language">LIVROS POR IDIOMA</SecondaryNavLink>
                <SecondaryNavLink to="/top-authors">PRINCIPAIS AUTORES</SecondaryNavLink>
            </SecondaryNav>
   
      {/* Novidades na Literis */}
            <SectionTitle>Novidades na Literis</SectionTitle>
                <BookGrid>
                    <ArrowButton onClick={prevBooks}>◄</ArrowButton>
                    {newBooks.slice(currentIndex, currentIndex + 4).map((book) => (
                      <BookCard key={book.id}>
                        <BookImage src={book.image} alt={book.title} />
                        <BookTitle>{book.title}</BookTitle>
                        <BookAuthor>{book.author}</BookAuthor>
                        <BookPrice>{book.price}</BookPrice>
                        <DetailsButton as={Link} to={`/product/${book.id}`}>
                          Ver Detalhes
                        </DetailsButton>
                      </BookCard>
                    ))}
                    <ArrowButton onClick={nextBooks}>►</ArrowButton>
                </BookGrid>
            <SeeMoreButton>VEJA MAIS NA LIVRARIA</SeeMoreButton>
            <hr />

      {/* Oscar 2025: Leia antes de assistir */}
      <SectionTitle>Oscar 2025: Leia antes de assistir</SectionTitle>
          <BookGrid>
              <ArrowButton onClick={prevBooks}>◄</ArrowButton>
              {oscarBooks.slice(currentIndex, currentIndex + 4).map((book) => (
                  <BookCard key={book.id}>
                    <BookImage src={book.image} alt={book.title} />
                    <BookTitle>{book.title}</BookTitle>
                    <BookAuthor>{book.author}</BookAuthor>
                    <BookPrice>{book.price}</BookPrice>
                    <DetailsButton as={Link} to={`/product/${book.id}`}>
                      Ver Detalhes
                    </DetailsButton>
                  </BookCard>
                ))}
                <ArrowButton onClick={nextBooks}>►</ArrowButton>
          </BookGrid>
          <SeeMoreButton>VEJA MAIS NA LIVRARIA</SeeMoreButton>
          <hr />

      {/* Autores para conhecer em 2025 */}
      <SectionTitle>Autores para conhecer em 2025</SectionTitle>
      <AuthorGrid>
        <ArrowButton onClick={prevBooks}>◄</ArrowButton>
        {visibleAuthors.slice(currentIndex, currentIndex + 4).map((author) => (
          <AuthorCard key={author.id}>
            <AuthorImage src={author.image} alt={author.name} />
            <AuthorName>{author.name}</AuthorName>
          </AuthorCard>
        ))}
        <ArrowButton onClick={nextBooks}>►</ArrowButton>
      </AuthorGrid>
      <hr />

      {/* Cupons de desconto */}
      <SectionTitle>Cupons de desconto</SectionTitle>
          <CupomCard>
            <CupomImage src={Cupom2} alt="Cupom de desconto" />
            <CupomImage src={AstronautCupom} alt="Cupom de desconto" />
            <CupomImage src={MoonCupom} alt="Cupom de desconto" />
          </CupomCard>
          <hr />

      {/* Ofertas da Semana */}
      <SectionTitle>Ofertas da Semana</SectionTitle>
      <OfferGrid>
        {visibleOffers.map((offer) => (
          <OfferCard key={offer.id}>
            <BookImage src={offer.image} alt={offer.title} />
            <BookTitle>{offer.title}</BookTitle>
            <BookPrice>{offer.price}</BookPrice>
            <DetailsButton as={Link} to={`/product/${offer.id}`}>
               Ver Detalhes
            </DetailsButton>
          </OfferCard>
        ))}
      </OfferGrid>
      <SeeMoreButton>VEJA MAIS NA LIVRARIA</SeeMoreButton>
      <hr />

      {/* Conheça a Literis */}
      <SectionTitle>Conheça a Literis</SectionTitle>
    </HomeContainer>
  );
};

export default Home;