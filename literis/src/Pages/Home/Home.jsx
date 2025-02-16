import React, { useState } from 'react';
import {
  newBooks,
  oscarBooks,
  authors,
  coupons,
  offers,
  // aboutCards,
} from '../../Vitrine/livros'; // Importando os dados
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
  CouponGrid,
  CouponCard,
  OfferGrid,
  OfferCard,
  // AboutGrid,
  // AboutCard,
  // AboutIcon,
  // AboutText,
  SeeMoreButton,
  PaginationContainer,
} from './style';

const Home = () => {
  const booksPerPage = 5;

  // Estados para paginação de cada seção
  const [currentNewBooksIndex, setCurrentNewBooksIndex] = useState(0);
  const [currentOscarBooksIndex, setCurrentOscarBooksIndex] = useState(0);
  const [currentAuthorsIndex, setCurrentAuthorsIndex] = useState(0);
  const [currentOffersIndex, setCurrentOffersIndex] = useState(0);

  // Funções para navegar entre os livros
  const nextBooks = (setIndex, currentIndex, books) => {
    setIndex((prev) => (prev + booksPerPage < books.length ? prev + booksPerPage : prev));
  };

  const prevBooks = (setIndex, currentIndex) => {
    setIndex((prev) => (prev - booksPerPage >= 0 ? prev - booksPerPage : prev));
  };

  // Livros visíveis em cada seção
  const visibleNewBooks = newBooks.slice(currentNewBooksIndex, currentNewBooksIndex + booksPerPage);
  const visibleOscarBooks = oscarBooks.slice(currentOscarBooksIndex, currentOscarBooksIndex + booksPerPage);
  const visibleAuthors = authors.slice(currentAuthorsIndex, currentAuthorsIndex + booksPerPage);
  const visibleOffers = offers.slice(currentOffersIndex, currentOffersIndex + booksPerPage);

  return (
    <HomeContainer>
      {/* Novidades na Literis */}
      <SectionTitle>Novidades na Literis</SectionTitle>
      <BookGrid>
        {visibleNewBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <BookPrice>{book.price}</BookPrice>
            <DetailsButton>Ver Detalhes</DetailsButton>
          </BookCard>
        ))}
      </BookGrid>
      <PaginationContainer>
        <ArrowButton
          onClick={() => prevBooks(setCurrentNewBooksIndex, currentNewBooksIndex)}
          disabled={currentNewBooksIndex === 0}
        >
          ◄
        </ArrowButton>
        <ArrowButton
          onClick={() => nextBooks(setCurrentNewBooksIndex, currentNewBooksIndex, newBooks)}
          disabled={currentNewBooksIndex + booksPerPage >= newBooks.length}
        >
          ►
        </ArrowButton>
      </PaginationContainer>
      <SeeMoreButton>Veja mais</SeeMoreButton>

      {/* Oscar 2025: Leia antes de assistir */}
      <SectionTitle>Oscar 2025: Leia antes de assistir</SectionTitle>
      <BookGrid>
        {visibleOscarBooks.map((book) => (
          <BookCard key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <BookPrice>{book.price}</BookPrice>
            <DetailsButton>Ver Detalhes</DetailsButton>
          </BookCard>
        ))}
      </BookGrid>
      <PaginationContainer>
        <ArrowButton
          onClick={() => prevBooks(setCurrentOscarBooksIndex, currentOscarBooksIndex)}
          disabled={currentOscarBooksIndex === 0}
        >
          ◄
        </ArrowButton>
        <ArrowButton
          onClick={() => nextBooks(setCurrentOscarBooksIndex, currentOscarBooksIndex, oscarBooks)}
          disabled={currentOscarBooksIndex + booksPerPage >= oscarBooks.length}
        >
          ►
        </ArrowButton>
      </PaginationContainer>
      <SeeMoreButton>Veja mais</SeeMoreButton>

      {/* Autores para conhecer em 2025 */}
      <SectionTitle>Autores para conhecer em 2025</SectionTitle>
      <AuthorGrid>
        {visibleAuthors.map((author) => (
          <AuthorCard key={author.id}>
            <AuthorImage src={author.image} alt={author.name} />
            <AuthorName>{author.name}</AuthorName>
          </AuthorCard>
        ))}
      </AuthorGrid>
      <PaginationContainer>
        <ArrowButton
          onClick={() => prevBooks(setCurrentAuthorsIndex, currentAuthorsIndex)}
          disabled={currentAuthorsIndex === 0}
        >
          ◄
        </ArrowButton>
        <ArrowButton
          onClick={() => nextBooks(setCurrentAuthorsIndex, currentAuthorsIndex, authors)}
          disabled={currentAuthorsIndex + booksPerPage >= authors.length}
        >
          ►
        </ArrowButton>
      </PaginationContainer>
      <SeeMoreButton>Veja mais</SeeMoreButton>

      {/* Cupons de desconto */}
      <SectionTitle>Cupons de desconto</SectionTitle>
      <CouponGrid>
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id}>{coupon.text}</CouponCard>
        ))}
      </CouponGrid>

      {/* Ofertas da Semana */}
      <SectionTitle>Ofertas da Semana</SectionTitle>
      <OfferGrid>
        {visibleOffers.map((offer) => (
          <OfferCard key={offer.id}>
            <BookImage src={offer.image} alt={offer.title} />
            <BookTitle>{offer.title}</BookTitle>
            <BookPrice>{offer.price}</BookPrice>
            <DetailsButton>Ver Detalhes</DetailsButton>
          </OfferCard>
        ))}
      </OfferGrid>
      <PaginationContainer>
        <ArrowButton
          onClick={() => prevBooks(setCurrentOffersIndex, currentOffersIndex)}
          disabled={currentOffersIndex === 0}
        >
          ◄
        </ArrowButton>
        <ArrowButton
          onClick={() => nextBooks(setCurrentOffersIndex, currentOffersIndex, offers)}
          disabled={currentOffersIndex + booksPerPage >= offers.length}
        >
          ►
        </ArrowButton>
      </PaginationContainer>
      <SeeMoreButton>Veja mais</SeeMoreButton>

      {/* Conheça a Literis
      <SectionTitle>Conheça a Literis</SectionTitle>
      <AboutGrid>
        {aboutCards.map((card) => (
          <AboutCard key={card.id}>
            <AboutIcon>{card.icon}</AboutIcon>
            <AboutText>{card.text}</AboutText>
          </AboutCard>
        ))}
      </AboutGrid> */}
    </HomeContainer>
  );
};

export default Home;