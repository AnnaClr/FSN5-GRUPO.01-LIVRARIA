import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBook, FaUsers, FaChartLine, FaSmile, FaArrowRight, FaTruck, FaLeaf, FaShieldAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookLoverBoy from '../assets/BookLoverBoy.png';
import BookLoverGirl from '../assets/BookLoverGirl.png';
// import GirlWithBook from '../assets/GirlWithBook.png';

// Animação de fade-in
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

// Animação de preenchimento das barras
const fillBar = keyframes`
  from {
    width: 0;
  }
  to {
    width: var(--progress);
  }
`;

const AboutWrapper = styled.div`
  padding: 80px 30px;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;

  .cards-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
  }

  .card {
    width: 30%;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 20px;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #007bff;
  }

  .card-text {
    font-size: 1rem;
    color: #777;
    line-height: 1.6;
  }

  .team-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;
  }

  .team-member {
    width: 22%;
    background-color: #fff;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-10px);
  }

  .team-member h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #2c3e50;
  }

  .team-member p {
    font-size: 1rem;
    color: #777;
    margin-bottom: 15px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  .social-links a {
    font-size: 1.5rem;
    color: #555;
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;

    h1 {
      font-size: 2rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .card, .team-member {
      width: 100%;
      margin-bottom: 30px;
    }

    .team-container {
      flex-direction: column;
      align-items: center;
    }

    .cards-container {
      flex-direction: column;
      align-items: center;
    }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 80px;
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const SectionContent = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionImage = styled.img`
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #007bff, #00bfff);
    margin-top: 10px;
    border-radius: 2px;
  }
`;

const SectionText = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  background: linear-gradient(90deg, #007bff, #00bfff);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: linear-gradient(90deg, #0056b3, #0099cc);
  }
`;

function About() {
  return (
    <AboutWrapper>
      {/* Seção 1: Sobre Nós */}
      <Section>
        <SectionContent>
          <SectionTitle>Sobre Nós</SectionTitle>
          <SectionText>
            A Literis nasceu do sonho de quatro amigos apaixonados por literatura e tecnologia: Tailan, Ana Clara, Ismael e
            José Matheus. Unidos pela ideia de democratizar o acesso à leitura e aproveitar o poder da internet,
            fundaram em 2024 uma plataforma inovadora que une a praticidade de uma loja virtual à experiência enriquecedora
            de explorar uma livraria física.
          </SectionText>
          <SectionText>
            Ao contrário de muitas lojas virtuais, a Literis se destaca por sua curadoria especializada, onde buscamos oferecer
            títulos de diversos gêneros e autores para todos os gostos e idades. Nossa missão é tornar o acesso à literatura
            mais simples e acessível para todos.
          </SectionText>
          <CtaButton to="/register">
            Cadastre-se Agora <FaArrowRight />
          </CtaButton>
        </SectionContent>
        <SectionImage src={BookLoverGirl} alt="Livros" />
      </Section>

      {/* Seção 2: Nossa Missão */}
      <Section>
        <SectionImage src={BookLoverBoy} alt="Equipe" />
        <SectionContent>
          <SectionTitle>Nossa Missão</SectionTitle>
          <SectionText>
            Nossa missão é garantir que qualquer pessoa, em qualquer lugar, possa explorar e comprar seus livros favoritos com
            facilidade, sem ter que sair de casa. Buscamos também contribuir para o desenvolvimento cultural e educacional do
            país, através da promoção de conteúdos literários que agreguem conhecimento, diversão e reflexões importantes.
          </SectionText>
          <SectionText>
            Nossa visão é ser a maior e mais confiável livraria virtual do Brasil, reconhecida por seu compromisso com a
            educação, cultura, inovação e excelência no atendimento ao cliente.
          </SectionText>
        </SectionContent>
      </Section>

      {/* Seção 3: Nós Garantimos */}

      <section>
        <h2 className="section-title">Nós Garantimos</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">
              <FaTruck />
            </div>
            <h3 className="card-title">Política de Entregas</h3>
            <p className="card-text">
              Oferecemos opções de envio rápidas e seguras para todo o Brasil, com rastreamento em tempo real e prazos
              de entrega que se ajustam às necessidades de nossos clientes. Garantimos que seus livros cheguem em perfeitas
              condições.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaLeaf />
            </div>
            <h3 className="card-title">Segurança Ambiental</h3>
            <p className="card-text">
              Nos preocupamos com o meio ambiente e adotamos práticas sustentáveis em nossa operação. Utilizamos embalagens
              recicláveis e trabalhamos para reduzir nossa pegada de carbono.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaShieldAlt />
            </div>
            <h3 className="card-title">Política de Segurança</h3>
            <p className="card-text">
              Sua segurança é nossa prioridade. Implementamos medidas de segurança rigorosas em nosso site para proteger seus
              dados pessoais e garantir uma experiência de compra confiável.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 4: Conheça os Fundadores */}
      <section>
        <h2 className="section-title">Conheça os Fundadores</h2>
        <div className="team-container">
          <div className="team-member">
            <h3>Tailan</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/tailandesouza/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Naliat" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>Ana Clara</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/annaclrr/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AnnaClr" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>José Matheus</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/josé-matheus-ferreira-lino-de-sena-2428b32b5/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/josematheus32" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h3>Ismael</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/MAGEOFCODES" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AboutWrapper>
  );
}

export default About;
