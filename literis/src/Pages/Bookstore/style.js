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

export const Container = styled.div`
  display: flex;
  padding: 40px;
  gap: 10px;
`;

export const FilterSection = styled.div`
  width: 250px;
  padding: 20px;
  background:rgb(253, 253, 253);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

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
    border-radius: 8px;
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
`;

export const BookCard = styled.div`
  background: ${colors.background};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-width: 200px;
    height: 280px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: transform 0.3s;
  }

  h3 {
    margin: 16px 0 8px;
    color: ${colors.text};
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    margin: 4px 0;
    color: ${colors.secondary};
    font-size: 0.9rem;
  } 

  .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgb(0, 210, 25);
  }

  .author {
    font-size: 0.9rem;
    color:rgb(121, 121, 121);
    margin-top: 8px;
    font-style: italic;
  }
`;

export const Button = styled.button`
  background: ${colors.primary};
  width: 150px;
  justify-content: baseline;
  align-items: center;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;

    cursor: pointer;

  &:hover {
    background: ${colors.accent};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.5s ease;
    z-index: 0;
  }

  &:hover::after {
    width: 0;
    height: 0;
  }
`;