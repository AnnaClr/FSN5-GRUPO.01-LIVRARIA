import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaLinkedin, 
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaPaperPlane, 
} from 'react-icons/fa';

// Paleta de cores
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "rgb(255, 255, 255)",
  background2: "rgb(250, 250, 250)",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
  light: "#f8f9fa",
  dark: "#212529",
};

// Animations
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

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Container principal
const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px 30px;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
  color: ${colors.text};
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: ${colors.primary};
    position: relative;
    display: inline-block;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 5px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      border-radius: 3px;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${colors.text};
    max-width: 700px;
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  @media (max-width: 992px) {
    margin: 60px 20px;
    padding: 35px 25px;

    h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 768px) {
    margin: 50px 15px;
    padding: 30px 20px;
    
    h1 {
      font-size: 2rem;
      
      &::after {
        width: 80px;
        height: 4px;
      }
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 576px) {
    margin: 40px 10px;
    padding: 25px 15px;
    
    h1 {
      font-size: 1.8rem;
      
      &::after {
        width: 60px;
        height: 3px;
      }
    }

    p {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }
`;

// Grid de contato
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 992px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (max-width: 576px) {
    gap: 25px;
    margin-top: 30px;
  }
`;

// Seção de informações
const InfoSection = styled.div`
  background: linear-gradient(135deg, ${colors.light} 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
    z-index: 2;
  }

  h2 {
    color: ${colors.primary};
    font-size: 1.8rem;
    margin-bottom: 30px;
    position: relative;
    text-align: center;
    font-weight: 700;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      border-radius: 2px;
    }
  }

  @media (max-width: 992px) {
    padding: 35px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 576px) {
    padding: 25px;
    
    h2 {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateX(5px);
    background: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .icon-container {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 20px;
    font-size: 1.2rem;
    box-shadow: 0 4px 8px rgba(67, 97, 238, 0.3);
    animation: ${float} 4s ease-in-out infinite;
  }

  .content {
    flex: 1;
    
    h3 {
      color: ${colors.dark};
      font-size: 1.1rem;
      margin-bottom: 5px;
      font-weight: 600;
    }
    
    p, a {
      color: ${colors.text};
      margin: 0;
      font-size: 1rem;
      line-height: 1.5;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    a:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 992px) {
    padding: 12px;
    margin-bottom: 20px;
    
    .icon-container {
      width: 45px;
      height: 45px;
      margin-right: 15px;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    .content {
      h3 {
        font-size: 1rem;
      }
      
      p, a {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 576px) {
    padding: 10px;
    margin-bottom: 15px;
    
    .icon-container {
      width: 40px;
      height: 40px;
      margin-right: 12px;
      font-size: 1rem;
      border-radius: 10px;
    }
    
    .content {
      h3 {
        font-size: 0.95rem;
      }
      
      p, a {
        font-size: 0.9rem;
      }
    }
  }
`;

// Ícones sociais
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;

  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
      z-index: -1;
      transition: all 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      
      &:before {
        transform: scale(1.1);
      }
    }
    
    &:nth-child(1) { /* LinkedIn */
      &:before {
        background: #0077b5;
      }
    }
    
    &:nth-child(2) { /* GitHub */
      &:before {
        background: #333;
      }
    }
    
    &:nth-child(3) { /* Twitter */
      &:before {
        background: #1da1f2;
      }
    }
    
    &:nth-child(4) { /* Instagram */
      &:before {
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
      }
    }
  }

  @media (max-width: 992px) {
    margin-top: 35px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    gap: 15px;
    
    a {
      width: 45px;
      height: 45px;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 576px) {
    margin-top: 25px;
    
    a {
      width: 42px;
      height: 42px;
      font-size: 1.2rem;
    }
  }
`;

// Formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  animation: ${fadeIn} 1s ease-out;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${colors.light} 0%, #ffffff 100%);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
    z-index: 2;
  }

  h2 {
    color: ${colors.primary};
    margin-bottom: 30px;
    font-size: 1.8rem;
    text-align: center;
    font-weight: 700;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.accent});
      border-radius: 2px;
    }
  }

  label {
    font-weight: 600;
    margin-top: 15px;
    color: ${colors.dark};
    display: block;
    text-align: left;
    font-size: 1rem;
  }

  input, textarea {
    width: 100%;
    padding: 15px;
    margin-top: 8px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    background: #f8fafc;
    color: ${colors.text};
    transition: all 0.3s ease;

    &:focus {
      border-color: ${colors.primary};
      outline: none;
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.3);
      background: white;
    }

    &::placeholder {
      color: #a0aec0;
    }
  }

  div {
    width: 100%;
  }

  textarea {
    resize: vertical;
    min-height: 180px;
  }

  button {
    margin-top: 30px;
    padding: 16px 30px;
    background: ${colors.primary};
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
    width: 100%;

    &:hover {
      box-shadow: 0 6px 20px rgba(67, 97, 238, 0.4);
      background: ${colors.text};
    }
  }

  @media (max-width: 992px) {
    padding: 40px;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 25px;
    }
    
    input, textarea {
      padding: 14px;
    }
    
    button {
      padding: 15px 25px;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 35px;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    
    label {
      margin-top: 12px;
      font-size: 0.95rem;
    }
    
    input, textarea {
      padding: 13px;
      font-size: 0.95rem;
    }
    
    textarea {
      min-height: 160px;
    }
    
    button {
      margin-top: 25px;
      padding: 14px 20px;
    }
  }

  @media (max-width: 576px) {
    padding: 30px;
    
    h2 {
      font-size: 1.4rem;
      margin-bottom: 15px;
    }
    
    label {
      margin-top: 10px;
      font-size: 0.9rem;
    }
    
    input, textarea {
      padding: 12px;
      font-size: 0.9rem;
      border-radius: 8px;
    }
    
    textarea {
      min-height: 140px;
    }
    
    button {
      margin-top: 20px;
      padding: 13px 15px;
      font-size: 0.95rem;
    }
  }
`;

// Mensagem de sucesso
const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #48bb78;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  animation: ${fadeIn} 0.5s ease-out, ${pulse} 2s infinite;
  font-size: 1rem;
  text-align: center;
  width: 100%;

  @media (max-width: 992px) {
    padding: 14px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.9rem;
    margin-top: 18px;
  }

  @media (max-width: 576px) {
    padding: 10px;
    font-size: 0.85rem;
    margin-top: 15px;
  }
`;

// Componente de informações de contato
const ContactInfo = () => {
  return (
    <InfoSection>
      <h2>Informações de Contato</h2>
      
      <InfoItem>
        <div className="icon-container">
          <FaEnvelope />
        </div>
        <div className="content">
          <h3>Email</h3>
          <a href="mailto:contato@literis.com">contato@literis.com</a>
        </div>
      </InfoItem>
      
      <InfoItem>
        <div className="icon-container">
          <FaPhone />
        </div>
        <div className="content">
          <h3>Telefone</h3>
          <a href="tel:+558812345678">(88) 1234-5678</a>
        </div>
      </InfoItem>
      
      <InfoItem>
        <div className="icon-container">
          <FaMapMarkerAlt />
        </div>
        <div className="content">
          <h3>Endereço</h3>
          <p>Av. Brasil, 1000 - Fortaleza | CE</p>
        </div>
      </InfoItem>
      
      <InfoItem>
        <div className="icon-container">
          <FaClock />
        </div>
        <div className="content">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sábado: 9h às 18h</p>
        </div>
      </InfoItem>
      
      <SocialIcons>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </SocialIcons>
    </InfoSection>
  );
};

// Componente principal de Contato
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Container>
      <h1>Entre em Contato Conosco</h1>
      <p>Estamos aqui para ajudar! Envie-nos uma mensagem ou utilize nossos canais de comunicação.</p>
      
      <ContactGrid>
        <ContactInfo />
        
        <Form onSubmit={handleSubmit}>
          <h2>Envie uma Mensagem</h2>

          <div>
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Seu nome completo" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
        
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="seu@email.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Como podemos ajudar?" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : (
              <>
                <FaPaperPlane /> Enviar Mensagem
              </>
            )}
          </button>
          
          {isSuccess && (
            <SuccessMessage>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </SuccessMessage>
          )}
        </Form>
      </ContactGrid>
    </Container>
  );
};

export default Contact;