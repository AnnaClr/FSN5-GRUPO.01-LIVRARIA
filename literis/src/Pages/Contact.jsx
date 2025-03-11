import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaInstagram } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  text-align: center;
  background: #f4f4f4;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  color: #333;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #3073e8;
  }
`;

const Info = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
    animation: ${fadeIn} 1.5s ease-in-out;
    color: #555;
  }

  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #1193cb;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  animation: ${fadeIn} 2s ease-in-out;

  label {
    font-weight: bold;
    margin-top: 15px;
    color: #333;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    background: white;
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #118acb;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }

  button {
    margin-top: 20px;
    padding: 12px;
    background: linear-gradient(135deg, #1177cb, #2575fc);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #333;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #1c81d9;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <h1>ENTRE EM CONTATO</h1>
      <p>Estamos aqui para te ajudar com o necessário! Contate-nos por meios de nossas redes sociais ou envie-nos uma mensagem.</p>
      <Info>
        <p><FaEnvelope /> <a href="mailto:contato@literis.com">contato@literis.com</a></p>
        <p><FaPhone /> <a href="tel:+551112345678">(11) 1234-5678</a></p>
      </Info>
      <SocialIcons>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </SocialIcons>
      <Form>
        <label>Nome</label>
        <input type="text" placeholder="Digite o seu nome completo" required />
        
        <label>Email</label>
        <input type="email" placeholder="Digite o seu email" required />
        
        <label>Mensagem</label>
        <textarea placeholder="Digite a sua mensagem" rows="5" required></textarea>
        
        <button type="submit">Enviar Mensagem</button>
      </Form>
    </Container>
  );
};

export default Contact;