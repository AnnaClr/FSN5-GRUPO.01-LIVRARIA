import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Alinha a logo à esquerda e o menu à direita */
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(255, 255, 255);
  border-bottom: 8px solid rgb(88, 42, 255);
  border-top: 30px solid rgb(88, 42, 255);
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  text-decoration: none;
  color: #333;
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
  margin-right: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto; /* Empurra o menu para a direita */

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #5271ff;
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const CartIcon = styled.span`
  font-size: 2.5rem;
  cursor: pointer;
  color: rgb(115, 124, 133);
  padding: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;