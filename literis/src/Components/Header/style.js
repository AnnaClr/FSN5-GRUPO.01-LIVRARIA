import styled from 'styled-components';
import { Link } from 'react-router-dom';

const lightBackground = "rgb(247, 247, 247)";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 25px solid rgb(73, 0, 142);
  border-bottom: 1px solid gray;
  background-color: ${lightBackground};
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: rgb(73, 0, 142);

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none; /* Oculta os links em telas menores */
  }

  a {
    text-decoration: none;
    color: rgb(73, 0, 142);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(25, 68, 255);
    }
  }
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin: 0 auto; /* Centraliza a barra de pesquisa */
  flex: 1;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    display: none; /* Oculta a barra de pesquisa em telas muito pequenas */
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  padding: 0.5rem;

  &::placeholder {
    color: #999;
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6a11cb;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: #2575fc;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6a11cb;
  transition: color 0.3s ease;

  &:hover {
    color: #2575fc;
  }

  @media (max-width: 768px) {
    display: block; /* Exibe o ícone do menu em telas menores */
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 1rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (min-width: 769px) {
    display: none; /* Oculta o menu mobile em telas maiores */
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #5271ff;
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CartIcon = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  color: rgb(115, 124, 133);
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Estilos específicos para os ícones
export const IconWrapper = styled.span`
  display: flex;
  font-size: 1.5rem;
  color: rgb(73, 0, 142);
  transition: color 0.3s ease;

  &:hover {
    color: rgb(25, 68, 255);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;