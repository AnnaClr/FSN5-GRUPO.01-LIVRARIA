import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const gradient = "linear-gradient(to right, #6a11cb, #2575fc)";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* justify-content: center;
  gap: 5rem; */
  align-items: center;
 
  padding: 1rem 2rem;
  
 
  background-color: rgb(255, 255, 255);
  border-bottom: 8px solid rgb(88, 42, 255);
  border-top: 30px solid rgb(88, 42, 255);
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  margin-left: 75px;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  width: 765px; /* Ajuste o tamanho conforme necessário */
  height: 65px;
`;

export const SearchInput = styled.input`
  padding: 2.5rem;
  border: none;
  flex: 1;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 2.5rem;
  border: none;
  background-color: rgb(88, 42, 255);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color:rgb(53, 26, 255);
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-right: 1px solid #ddd;
`;

export const SearchSelect = styled.select`
  color:rgb(117, 117, 131);
  padding: 2.5rem;
  border: none;
  background-color: white;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 2rem;
  text-align: left;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0.9rem;
  pointer-events: none;
  color: rgb(117, 117, 131);
`;

export const ArrowIcon = styled.span`
  font-size: 1rem;
  color: gray;
`;

export const SearchIcon = styled.span`
  font-size: 1rem;
`;

export const CartIcon = styled.span`
  font-size: 2.5rem;
  cursor: pointer;
  color:rgb(115, 124, 133);
  padding: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;
