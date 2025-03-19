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
        {/* Logo da Livraria */}
        {/* <Logo to="/">LITERIS</Logo> */}

        {/* Links de Navegação (Desktop) */}
        <NavLinks>
          {/* Logo da Livraria */}
          <Logo to="/">LITERIS</Logo>

          <div className="navs-center">
            <NavLink to="/">PÁGINA INICIAL</NavLink>
            <NavLink to="/bookstore">LIVRARIA</NavLink>
            <NavLink to="/seller-login" onClick={toggleMenu}>VENDEDOR</NavLink>
            <NavLink to="/about">SOBRE NÓS</NavLink>
          </div>

          <div className="navs-right">
            <CartIcon size={24} onClick={() => navigate('/cart')} />
            {!isAuthenticated && (
              <LoginButton onClick={() => navigate('/register')}><strong>CADASTRO</strong></LoginButton>
            )}
            {isAuthenticated && (
              <LoginButton onClick={handleLogout}>Sair</LoginButton>
            )}
          </div>
        </NavLinks>

        {/* Ícone do Menu Hambúrguer (Mobile) */}
        <MenuIcon onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </MenuIcon>

        {/* Menu Mobile */}
        <MobileMenu isOpen={isMenuOpen}>
          <MobileNavLinks>
            <NavLink to="/" onClick={toggleMenu}>página inicial</NavLink>
            <NavLink to="/bookstore" onClick={toggleMenu}>livraria</NavLink>
            <NavLink to="/selle-login" onClick={toggleMenu}>vendedor</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>sobre nós</NavLink>
            <NavLink to="/cart" onClick={toggleMenu}>carrinho</NavLink>
            {!isAuthenticated && (
              <NavLink to="/login" onClick={toggleMenu}>LOGIN</NavLink>
            )}
            {isAuthenticated && (
              <LoginButton onClick={handleLogout}>Logout</LoginButton>
            )}
          </MobileNavLinks>
        </MobileMenu>
      </Nav>
    </>
  );
};

export default Header;