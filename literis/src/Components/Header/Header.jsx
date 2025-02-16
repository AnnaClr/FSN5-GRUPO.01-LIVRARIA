import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// Importando icones:
// import { IoMdCart } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
// import { FaUserAstronaut } from "react-icons/fa6";

// Importando componentes estilizados:
import {  
  Nav, 
  NavLinks, 
  LogoImage, 
  LogoutButton, 
  Logo, 
  CartIcon, 
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
        <Nav>
        {/* Logo da Livraria */}            
        <Logo to="/">
            <LogoImage src="../src/assets/Literis.png" alt="Literis Logo" />
        </Logo>
     
          <div className='divtest'> </div>
              <NavLinks>
                  <section style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      {/* Navegar para a Página Inicial */}
                      <Link to="/">
                          INÍCIO
                      </Link>
                      {/* Navegar para a Livraria */}
                      <Link to="/bookstore">
                          LIVRARIA
                      </Link>
                      {/* Navegar para a pagina Sobre Nós*/}
                      <Link to="/about">
                          SOBRE NÓS
                      </Link>
                      {/* Navegar para o Login */}
                      {!isAuthenticated && (
                          <Link to="/login">
                              LOGIN
                          </Link>
                      )}
                      {/* Navegar para o Carrinho */}
                      <Link to="/cart">
                          CARRINHO
                      </Link>
                  </section>
                  
                  
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