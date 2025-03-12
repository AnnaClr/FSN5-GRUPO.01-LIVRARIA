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
        {/* Seção da Logo e Descrição */}
        <LogoSection>
          <LogoImage src={Logo} alt="Literis Logo" />
          <p>Literis - Sua jornada literária começa aqui!</p>
        </LogoSection>

        {/* Seção Explore */}
        <FooterSection>
          <SectionTitle>EXPLORE</SectionTitle>
          <ul>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/categories">Categorias</Link></li>
            <li><Link to="/best-sellers">Mais Vendidos</Link></li>
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
          </ul>
        </FooterSection>

        {/* Redes Sociais */}
        <FooterSection>
          <SectionTitle>REDES SOCIAIS</SectionTitle>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>

        {/* Pagamentos Seguros */}
        <FooterSection>
          <SectionTitle>PAGAMENTOS SEGUROS</SectionTitle>
          <PaymentIcons>
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
          </PaymentIcons>
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