import React from "react";
import {
  HomeContainer,
  Cover,
  Text,
  Title,
  Subtitle,
  Button,
  Cards,
  CardsTitle,
  CardsContent,
  Card,
  CardIcon,
  CardNum,
  CardTitle,
  CardSubtitle,
  Vitrine,
  Box,
  BooksImg,
  VitrineText,
  Paragraph,
  Books,
  BooksTitle,
  BookCardContainer,
  BookCard,
  BookCover,
  BookName,
  Author,
  Price,
  BookCardButton,
  VitrineTitle,
} from "./style";

import HomeImages from "../../imgs/Home.png";
import PequenoPrincipe from '../../imgs/PequenoPrincipe.png';
import DomCasmurro from '../../imgs/DomCasmurro.png';
import { FaUser, FaThumbsUp } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { books } from "../../Vitrine/livros";

export default function Home() {

    const selectedBooks = books.filter(
      (book) =>
        book.title === "Conclave" || book.title === "Wicked" || book.title === "Ainda Estou Aqui"
    );

  return (
    <HomeContainer>
      <Cover>
        <Text>
        <Title className="title">
          <span className="blue">BOAS VINDAS À LITERIS! 🌟</span>
          <br /> {/* Quebra de linha */}
          Sua jornada literária começa aqui
        </Title>
          <Subtitle className="subtitle">
            Aqui, você encontra um universo de histórias, conhecimento e
            aventuras ao alcance de um clique. Seu próximo livro favorito está
            te esperando! 🚀
          </Subtitle>
          <Button>COMECE AGORA</Button>
        </Text>
        <img src={HomeImages} alt="" />
      </Cover>

      <Cards>
        <CardsTitle>
          CONHEÇA O MAIS NOVO E COMPLETO
          <br />
          ACERVO LITERÁRIO ONLINE
        </CardsTitle>
        <CardsContent>
          <Card>
            <CardIcon>
              <IoBookSharp  size={50} color="rgb(30, 90, 255)" />
            </CardIcon>
            <CardNum>1000+</CardNum>
            <CardTitle>Livros Disponíveis</CardTitle>
            <CardSubtitle>
              Explore nossa vasta coleção de livros de
              <br />
              diversos gêneros e autores.
            </CardSubtitle>
          </Card>
          <Card>
            <CardIcon>
              <FaUser size={50} color="rgb(30, 90, 255)" />
            </CardIcon>
            <CardNum>500+</CardNum>
            <CardTitle>Autores incríveis</CardTitle>
            <CardSubtitle>
              Explore nossa vasta coleção de livros de
              <br />
              diversos gêneros e autores.
            </CardSubtitle>
          </Card>
          <Card>
            <CardIcon>
              <FaThumbsUp size={50} color="rgb(30, 90, 255)" />
            </CardIcon>
            <CardNum>99%</CardNum>
            <CardTitle>de aprovação</CardTitle>
            <CardSubtitle>
              Explore nossa vasta coleção de livros de
              <br />
              diversos gêneros e autores.
            </CardSubtitle>
          </Card>
        </CardsContent>
      </Cards>

      <Vitrine>
        <Box>
          <BooksImg>
            <img src={PequenoPrincipe} alt="" className="img1" />
            <img src={DomCasmurro} alt="" className="img2" />
          </BooksImg>
          <VitrineText>
            <VitrineTitle>LIVROS EXTRAORDINÁRIOS PARA VOCÊ!</VitrineTitle>
            <Paragraph>
            Descubra histórias envolventes e conhecimento inspirador com nossa seleção de livros extraordinários. 
            De aventuras emocionantes a aprendizados transformadores, há sempre uma nova página esperando por você! 📚✨
            </Paragraph>
            <Button>COMECE AGORA</Button>
          </VitrineText>
        </Box>
      </Vitrine>

      {/* Seção dos livros */}
      <Books>
        <BooksTitle>EXPLORE NOSSAS ESTANTES DE LIVROS</BooksTitle>
        <BookCardContainer>
          {selectedBooks.map((book) => (
            <BookCard key={book.id}>
              <BookCover style={{ backgroundImage: `url(${book.image})` }} />
              <BookName>{book.title}</BookName>
              <Author>{book.author}</Author>
              <Price>{book.physicalPrice}</Price>
              <BookCardButton>ver detalhes</BookCardButton>
            </BookCard>
          ))}
        </BookCardContainer>
      </Books>

    </HomeContainer>
  );
}
