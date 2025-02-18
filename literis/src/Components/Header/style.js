import styled from 'styled-components';
import { Link } from 'react-router-dom';

const lightBackground = "rgb(247, 247, 247)";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(255, 255, 255);
  border-bottom: 4px solid rgb(88, 42, 255);
  background-color: ${lightBackground};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;

  @media (max-width: 480px) {
    width: 80px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #5271ff;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CartIcon = styled.span`
  font-size: 2.5rem;
  cursor: pointer;
  color: rgb(115, 124, 133);
  padding: 1.5rem;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem;
  }
`;