import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoIosArrowBack, IoIosArrowForward  } from 'react-icons/io';

// import AstronautCupom from '../../assets/AstronautCupom.png';
// import Cupom2 from '../../assets/Cupom2.png';
// import MoonCupom from '../../assets/MoonCupom.png';

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
  // ArrowButton,
  // CupomImage,
  // CupomCard,
  OfferGrid,
  OfferCard,
  // SeeMoreButton,
  SecondaryNav, 
  SecondaryNavLink, 
  // MenuCategoryIcon 
} from './style';

const Home = () => {
  const booksPerPage = 4;

  // Estados separados para cada seção
  const [currentNewBooks, setCurrentNewBooks] = useState(0);
  const [currentOscarBooks, setCurrentOscarBooks] = useState(0);
  const [currentAuthors, setCurrentAuthors] = useState(0);
  const [currentOffers, setCurrentOffers] = useState(0);

  // Funções genéricas para navegação
  const nextSlide = (current, setCurrent, listLength) => {
    setCurrent(current + booksPerPage >= listLength ? 0 : current + booksPerPage);
  };

  const prevSlide = (current, setCurrent, listLength) => {
    setCurrent(current === 0 ? listLength - booksPerPage : current - booksPerPage);
  };

  return (
    <>
        <SecondaryNav>
            <SecondaryNavLink to="/categories"> 
              {/* <MenuCategoryIcon> <IoMdMenu /> </MenuCategoryIcon> */}
              CATEGORIAS 
            </SecondaryNavLink>
            <SecondaryNavLink to="/best-sellers">MAIS VENDIDOS</SecondaryNavLink>
            <SecondaryNavLink to="/books-by-language">LIVROS POR IDIOMA</SecondaryNavLink>
            <SecondaryNavLink to="/top-authors">PRINCIPAIS AUTORES</SecondaryNavLink>
        </SecondaryNav>

        <HomeContainer>
            {/* Seção Novidades */}
            <SectionTitle>Novidades na Literis</SectionTitle>
            <BookGrid>
              <button className='left-arrow' onClick={() => prevSlide(currentNewBooks, setCurrentNewBooks, newBooks.length)}><IoIosArrowBack /></button>
              {newBooks.slice(currentNewBooks, currentNewBooks + booksPerPage).map((book) => (
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
              <button className='right-arrow' onClick={() => nextSlide(currentNewBooks, setCurrentNewBooks, newBooks.length)}><IoIosArrowForward /></button>
            </BookGrid>
            <hr />

            {/* Seção Oscar 2025 */}
            <SectionTitle>Oscar 2025: Leia antes de assistir</SectionTitle>
            <BookGrid>
              <button className='left-arrow' onClick={() => prevSlide(currentOscarBooks, setCurrentOscarBooks, oscarBooks.length)}><IoIosArrowBack /></button>
              {oscarBooks.slice(currentOscarBooks, currentOscarBooks + booksPerPage).map((book) => (
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
              <button className='right-arrow' onClick={() => nextSlide(currentOscarBooks, setCurrentOscarBooks, oscarBooks.length)}><IoIosArrowForward /></button>
            </BookGrid>
            <hr />

            {/* Seção Autores */}
            <SectionTitle>Autores para conhecer em 2025</SectionTitle>
            <AuthorGrid>
              <button className='left-arrow' onClick={() => prevSlide(currentAuthors, setCurrentAuthors, authors.length)}><IoIosArrowBack /></button>
              {authors.slice(currentAuthors, currentAuthors + booksPerPage).map((author) => (
                <AuthorCard key={author.id}>
                  <AuthorImage src={author.image} alt={author.name} />
                  <AuthorName>{author.name}</AuthorName>
                </AuthorCard>
              ))}
              <button className='right-arrow' onClick={() => nextSlide(currentAuthors, setCurrentAuthors, authors.length)}><IoIosArrowForward /></button>
            </AuthorGrid>
            <hr />

            {/* Seção Cupons de desconto */}
            {/* <SectionTitle>Cupons de desconto</SectionTitle>
            <CupomCard>
              <CupomImage src={Cupom2} alt="Cupom de desconto" />
              <CupomImage src={AstronautCupom} alt="Cupom de desconto" />
              <CupomImage src={MoonCupom} alt="Cupom de desconto" />
            </CupomCard>
            <hr /> */}

            {/* Seção Ofertas do dia */}
            <SectionTitle>Ofertas do dia</SectionTitle>
            <OfferGrid>
              <button className='left-arrow' onClick={() => prevSlide(currentOffers, setCurrentOffers, offers.length)}><IoIosArrowBack /></button>
              {offers.slice(currentOffers, currentOffers + booksPerPage).map((offer) => (
                <OfferCard key={offer.id}>
                  <BookImage src={offer.image} alt={offer.title} />
                  <BookTitle>{offer.title}</BookTitle>
                  <BookAuthor>{offer.author}</BookAuthor>
                  <BookPrice>{offer.price}</BookPrice>
                  <DetailsButton as={Link} to={`/product/${offer.id}`}>
                    Ver Detalhes
                  </DetailsButton>
                </OfferCard>
              ))}
              <button className='right-arrow' onClick={() => nextSlide(currentOffers, setCurrentOffers, offers.length)}><IoIosArrowForward /></button>
            </OfferGrid>
            <hr />
        </HomeContainer>
    </>
  );
};

export default Home;