import styled, { keyframes } from "styled-components";

// Cores globais
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "#FFFFFF",
  background2: "rgb(245, 245, 245)",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(0, 50, 187)",
};

// Animação para o modal de filtro
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const SearchBar = styled.input`
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex: 1;
  font-size: 0.9rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px rgba(30, 90, 255, 0.1);
    outline: none;
  }
`;

export const FilterIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${colors.text};
    transition: color 0.3s;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterSection = styled.div`
  width: 250px;
  padding: 20px;
  background: rgb(253, 253, 253);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${({ isFilterOpen }) => (isFilterOpen ? "block" : "none")};
    width: 80%;
    margin-bottom: 20px;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  h2 {
    margin-bottom: 16px;
    color: ${colors.text};
    font-size: 1.5rem;
    font-weight: 600;
  }

  label {
    display: block;
    margin-bottom: 12px;
    color: ${colors.text};
    font-size: 0.9rem;
    font-weight: 500;
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: ${colors.background};
    color: ${colors.text};
    font-size: 0.9rem;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: ${colors.accent};
      box-shadow: 0 0 0 3px rgba(30, 90, 255, 0.1);
      outline: none;
    }
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const BookCard = styled.div`
  background: ${colors.background};
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-width: 150px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: transform 0.3s;

    @media (max-width: 768px) {
      height: 150px;
    }
  }

  h3 {
    margin: 12px 0 6px;
    color: ${colors.text};
    font-size: 1rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    margin: 4px 0;
    color: ${colors.secondary};
    font-size: 0.8rem;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  .price {
    margin-top: 8px;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(0, 210, 25);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .author {
    font-size: 0.8rem;
    color: rgb(121, 121, 121);
    margin-top: 6px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const Button = styled.button`
  background: ${colors.primary};
  width: 120px;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    background: ${colors.accent};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 6px 12px;
    font-size: 0.7rem;
  }
`;