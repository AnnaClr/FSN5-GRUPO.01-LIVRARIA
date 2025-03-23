import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import Logo from '../../imgs/LiterisLogo.png';

import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SectionTitle,
  FooterBottom,
  SocialIcons,
  PaymentIcons,
  LogoImage,
  LogoSection
} from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Seção da Logo, Descrição e Redes Sociais */}
        <LogoSection>
          <LogoImage src={Logo} alt="Literis Logo" />
          <p>Literis - Sua jornada literária começa aqui!</p>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialIcons>
        </LogoSection>

        {/* Seção Explore */}
        <FooterSection>
          <SectionTitle>EXPLORE</SectionTitle>
          <ul>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/categories">Categorias</Link></li>
            <li><Link to="/best-sellers">Mais Vendidos</Link></li>
            <li><Link to="/new-releases">Lançamentos</Link></li>
          </ul>
        </FooterSection>

        {/* Seção Ajuda */}
        <FooterSection>
          <SectionTitle>AJUDA & SUPORTE</SectionTitle>
          <ul>
            <li><Link to="/faq">Perguntas Frequentes</Link></li>
            <li><Link to="/policy">Política de Privacidade</Link></li>
            <li><Link to="/terms">Termos de Uso</Link></li>
            <li><Link to="/returns">Trocas & Devoluções</Link></li>
            <li><Link to="/shipping">Entregas & Prazos</Link></li>
          </ul>
        </FooterSection>

        {/* Seção Institucional */}
        <FooterSection>
          <SectionTitle>INSTITUCIONAL</SectionTitle>
          <ul>
            <li><Link to="/careers">Trabalhe Conosco</Link></li>
            <li><Link to="/press">Imprensa</Link></li>
            <li><Link to="/partners">Parceiros</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/events">Eventos</Link></li>
          </ul>
        </FooterSection>

        {/* Pagamentos Seguros */}
        <FooterSection>
          <SectionTitle>PAGAMENTOS SEGUROS</SectionTitle>
          <PaymentIcons>
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
          </PaymentIcons>
          <p>Compra 100% segura para você!</p>
        </FooterSection>
      </FooterContent>

      {/* Rodapé Inferior */}
      <FooterBottom>
        <hr />
        <p>© 2025 Literis - Livraria Online. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;