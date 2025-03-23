import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Nav,
  NavLinks,
  Logo,
  NavLink,
  LoginButton,
  CartIcon,
  MenuIcon,
  MobileMenu,
  MobileNavLinks,
} from './style.js';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav>
        <NavLinks>
          <Logo to="/">LITERIS</Logo>

          <div className="navs-center">
            <NavLink to="/">PÁGINA INICIAL</NavLink>
            <NavLink to="/bookstore">LIVRARIA</NavLink>
            <NavLink to="/about">SOBRE NÓS</NavLink>
            <NavLink to="/suggest-book">SUGERIR LIVRO</NavLink>
            <NavLink to="/admin">PAINEL ADMINISTRATIVO</NavLink> {/* Corrigido */}
          </div>

          <div className="navs-right">
            <CartIcon size={24} onClick={() => navigate('/cart')} />
            {!isAuthenticated && (
              <LoginButton onClick={() => navigate('/register')}>CADASTRO</LoginButton>
            )}
            {isAuthenticated && (
              <LoginButton onClick={handleLogout}>SAIR</LoginButton>
            )}
          </div>
        </NavLinks>

        <MenuIcon onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </MenuIcon>

        <MobileMenu isOpen={isMenuOpen}>
          <MobileNavLinks>
            <NavLink to="/" onClick={toggleMenu}>PÁGINA INICIAL</NavLink>
            <NavLink to="/bookstore" onClick={toggleMenu}>LIVRARIA</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>SOBRE NÓS</NavLink>
            <NavLink to="/suggest-book" onClick={toggleMenu}>SUGERIR LIVRO</NavLink>
            <NavLink to="/admin" onClick={toggleMenu}>PAINEL ADMINISTRATIVO</NavLink>
          </MobileNavLinks>
        </MobileMenu>
      </Nav>
    </>
  );
};

export default Header;
