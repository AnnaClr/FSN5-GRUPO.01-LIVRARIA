import React, { useState } from "react";
import { FaBook, FaHandshake, FaShieldAlt } from "react-icons/fa"; 
import BoyImage from "../../imgs/BoyImage.png";
import GirlImage from "../../imgs/GirlImage.png"; 
import axios from "axios";

import {
  AboutContainer,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState(""); // Para exibir mensagens de sucesso/erro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar recarregar a página
    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);
      setFeedback("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
      setFormData({ name: "", email: "", message: "" }); // Limpar os campos do formulário
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error.message);
      setFeedback("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    }
  };

  return (
    <AboutContainer>
      <Cover>
        <Text>
          <Title className="title">
            <span className="blue">SOBRE NÓS ✨</span>
            <br /> O QUE É A LITERIS?
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
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <SectionTitle className="FormTitle">CONTATE-NOS!</SectionTitle>
          <FormInput
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <FormTextArea
            name="message"
            placeholder="Sua mensagem"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <FormButton type="submit">Enviar Mensagem</FormButton>
          {feedback && <p>{feedback}</p>} {/* Exibe a mensagem de sucesso ou erro */}
        </FormContainer>
      </Form>
    </AboutContainer>
  );
}
