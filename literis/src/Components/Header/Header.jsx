import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// Importando icones:
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoMdCart} from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa6";

// Importando componentes estilizados:
import { Nav, NavLinks, 
  LogoImage, 
  LogoutButton, 
  Logo, 
  SearchBar, 
  SearchSelect, 
  SearchInput, 
  SearchButton, 
  SelectContainer, 
  CartIcon, 
  SearchIcon, 
  IconWrapper, 
} from './style';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Primeira Sessão: Logo, Barra de Pesquisa, Login e Carrinho */}
      <Nav>
        <div className='divtest'> </div>
            <Logo to="/">
              <LogoImage src="../src/assets/Literis.png" alt="Literis Logo" />
            </Logo>

            <SearchBar>
                <SelectContainer>
                  <SearchSelect>
                    <option value="title">Por Título</option>
                    <option value="author">Por Autor</option>
                    <option value="publisher">Por Editora</option>
                  </SearchSelect>
                    <IconWrapper>
                      <IoIosArrowDown />
                  </IconWrapper>
                </SelectContainer>
              <SearchInput type="text" placeholder="Pesquisar..." />
              <SearchButton>
                <SearchIcon> <FaSearch /> </SearchIcon> {/* Ícone de lupa */}
              </SearchButton>
            </SearchBar>

            <NavLinks>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Link to="/cart">
                    <CartIcon> <IoMdCart /> </CartIcon>
                  </Link>
                  {!isAuthenticated && (
                    <Link to="/login">
                      <CartIcon> <FaUserAstronaut /> </CartIcon>
                    </Link>
                  )}
                </div>
                
                {isAuthenticated && (
                  <LogoutButton onClick={handleLogout}> 
                     <CartIcon> 
                         <IoLogOut /> 
                      </CartIcon>
                  </LogoutButton>
                )}
          </NavLinks>
      </Nav>
    </>
  );
};

export default Header;