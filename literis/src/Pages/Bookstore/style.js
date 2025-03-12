import styled, { keyframes } from "styled-components";

// Cores globais
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "#FFFFFF",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

const gradientBackground = "linear-gradient(to right, rgb(255, 255, 255), rgb(240, 240, 240))";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  to {
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  background: ${gradientBackground};
  min-height: 100vh;
`;

export const FilterSection = styled.div`
  width: 250px;
  padding: 20px;
  background: ${colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;

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
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    max-height: 340px;
    border-radius: 8px;
    object-fit: cover;
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
`;

export const Button = styled.button`
  background: ${colors.accent};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background: ${colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;