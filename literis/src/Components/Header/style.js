import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// Cores globais
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "#FFFFFF",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

const gradientBackground = "linear-gradient(to right,rgb(255, 255, 255), rgb(240, 240, 240))";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${gradientBackground};
  height: 70px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Link)`
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.primary};
  text-decoration: none;
  /* margin-left: 70px; */
  flex: 1;

  &:hover {
    color:rgb(50, 84, 178);
  }
`;

export const NavLinks = styled.div`
  margin-left: 70px;
  margin-right: 70px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  align-items: center;
  flex: 1;
  gap: 18rem;

  .navs-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .navs-right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  color: ${colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${colors.primary};
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  color: ${colors.primary};
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color:rgb(50, 84, 178);
  }
`;

export const LoginButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background};
  font-size: 0.9rem;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(50, 84, 178);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${colors.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.background};
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;