import React from "react";
import { FaBook, FaHandshake, FaShieldAlt } from "react-icons/fa"; // Ícones para os cards
import BoyImage from "../../imgs/BoyImage.png"; // Imagem para a seção "Quem Somos"
import GirlImage from "../../imgs/GirlImage.png"; // Imagem para a seção "Nossa Missão"
// import Books from '../../imgs/Books.png';
import {
  AboutContainer,
  //   SectionContent,
  //   SectionImage,
  //   SectionText,
  SectionTitle,
  CardsContainer,
  Card,
  CardIcon,
  CardTitle,
  CardText,
  FormContainer,
  FormInput,
  FormTextArea,
  FormButton,
  Cover,
  Text,
  Title,
  Subtitle,
  Vitrine,
  Box,
  BooksImg,
  VitrineText,
  Paragraph,
  VitrineTitle,
  Button,
  Garantias,
  Form,
} from "./style";

export default function About() {
  return (
    <AboutContainer>
      <Cover>
        <Text>
          <Title className="title">
            <span className="blue">SOBRE NÓS ✨</span>
            <br /> {/* Quebra de linha */}O QUE É A LITERIS?
          </Title>
          <Subtitle className="subtitle">
            A Literis é uma plataforma dedicada a conectar leitores e autores em
            um espaço único, onde a paixão pela literatura se transforma em
            experiências incríveis. Nosso objetivo é oferecer um acervo
            diversificado e acessível, promovendo a cultura e o conhecimento.
          </Subtitle>
          <Button>COMECE AGORA</Button>
        </Text>
        <img src={BoyImage} alt="" />
      </Cover>

      <Vitrine>
        <Box>
          <BooksImg>
            <img src={GirlImage} alt="" />
          </BooksImg>
          <VitrineText>
            <VitrineTitle>QUAL A NOSSA MISSÃO?</VitrineTitle>
            <Paragraph>
              Nossa missão é democratizar o acesso à literatura, proporcionando
              uma experiência de leitura enriquecedora e acessível para todos.
              Acreditamos que cada livro é uma porta para novos mundos, e
              queremos ajudar você a explorá-los. 📚✨
            </Paragraph>
            <Button>COMECE AGORA</Button>
          </VitrineText>
        </Box>
      </Vitrine>

      {/* Seção: Nós Garantimos (Cards) */}
      <Garantias>
        <SectionTitle>NÓS GARANTIMOS</SectionTitle>
        <CardsContainer>
          <Card>
            <CardIcon>
              <FaBook size={40} />
            </CardIcon>
            <CardTitle>Diversidade Literária</CardTitle>
            <CardText>
              Oferecemos um acervo com milhares de livros de diversos gêneros e
              autores.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <FaHandshake size={40} />
            </CardIcon>
            <CardTitle>Compromisso com o Leitor</CardTitle>
            <CardText>
              Garantimos uma experiência de compra segura, rápida e
              satisfatória.
            </CardText>
          </Card>

          <Card>
            <CardIcon>
              <FaShieldAlt size={40} />
            </CardIcon>
            <CardTitle>Segurança e Privacidade</CardTitle>
            <CardText>
              Seus dados estão protegidos com os mais altos padrões de
              segurança.
            </CardText>
          </Card>
        </CardsContainer>
      </Garantias>

      {/* Seção: Formulário de Contato */}
      <Form>
        <SectionTitle>CONTATE-NOS!</SectionTitle>
        <FormContainer>
          <FormInput type="text" placeholder="Seu nome" />
          <FormInput type="email" placeholder="Seu e-mail" />
          <FormTextArea placeholder="Sua mensagem" rows="5" />
          <FormButton>Enviar Mensagem</FormButton>
        </FormContainer>
      </Form>
    </AboutContainer>
  );
}
