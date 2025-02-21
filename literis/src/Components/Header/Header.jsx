import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { IoLogOut } from "react-icons/io5";
import { FaSearch, FaHome, FaBookReader, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa6";
import Literis from '../../assets/Literis.png';

// Importando componentes estilizados:
import {
  Nav,
  NavLinks,
  LogoutButton,
  Logo,
  CartIcon,
  SearchBar,
  SearchInput,
  SearchButton,
  MenuIcon,
  MobileMenu,
  MobileNavLinks,
  IconWrapper,
  LogoImage,
} from './style';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav>
        {/* Logo da Livraria */}
        <Logo to="/">
          <h1>LITERIS - LIVRARIA ONLINE</h1>
        </Logo>

        {/* <Logo>
          <LogoImage src="./src/assets/Literis.png" alt="Literis Logo" />
          <p>Literis - Sua jornada literária começa aqui!</p>
        </Logo> */}

        {/* Barra de Pesquisa (Centralizada) */}
        <SearchBar onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Pesquisar livros..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit">
            <IconWrapper>
              <FaSearch />
            </IconWrapper>
          </SearchButton>
        </SearchBar>

        {/* Links de Navegação (Desktop) */}
        <NavLinks>
          <section style={{ display: "flex", alignItems: "center", gap: "3rem", justifyContent: "center"}}>
            <Link to="/">
              <IconWrapper>
                <FaHome />
              </IconWrapper>
            </Link>
            <Link to="/bookstore">
              <IconWrapper>
                <FaBookReader />
              </IconWrapper>
            </Link>
            {!isAuthenticated && (
              <Link to="/login">
                <IconWrapper>
                  <FaUserAstronaut />
                </IconWrapper>
              </Link>
            )}
            <Link to="/cart">
              <IconWrapper>
                <FaShoppingCart />
              </IconWrapper>
            </Link>
          </section>

          {isAuthenticated && (
            <LogoutButton onClick={handleLogout}>
              <IconWrapper>
                <IoLogOut />
              </IconWrapper>
            </LogoutButton>
          )}
        </NavLinks>

        {/* Ícone do Menu Hambúrguer (Mobile) */}
        <MenuIcon onClick={toggleMenu}>
          <IconWrapper>
            <GiHamburgerMenu />
          </IconWrapper>
        </MenuIcon>

        {/* Menu Mobile */}
        <MobileMenu isOpen={isMenuOpen}>
          <MobileNavLinks>
            <Link to="/" onClick={toggleMenu}>
              <IconWrapper>
                <FaHome />
              </IconWrapper>
              INÍCIO
            </Link>
            <Link to="/bookstore" onClick={toggleMenu}>
              <IconWrapper>
                <FaBookReader />
              </IconWrapper>
              LIVRARIA
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              SOBRE NÓS
            </Link>
            {!isAuthenticated && (
              <Link to="/login" onClick={toggleMenu}>
                <IconWrapper>
                  <FaUserAstronaut />
                </IconWrapper>
                LOGIN
              </Link>
            )}
            <Link to="/cart" onClick={toggleMenu}>
              <IconWrapper>
                <FaShoppingCart />
              </IconWrapper>
              CARRINHO
            </Link>
            {isAuthenticated && (
              <LogoutButton onClick={handleLogout}>
                <IconWrapper>
                  <IoLogOut />
                </IconWrapper>
                SAIR
              </LogoutButton>
            )}
          </MobileNavLinks>
        </MobileMenu>
      </Nav>
    </>
  );
};

export default Header;