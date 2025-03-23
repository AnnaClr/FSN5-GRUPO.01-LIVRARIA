import styled from "styled-components";

// Estilo para o Container principal
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa; // Cor de fundo clara
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave
`;

// Estilo para o Título do painel
export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #343a40; // Cor do texto
`;

// Estilo para a tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd; // Linha separadora entre linhas
  }

  th {
    background-color: #343a40; // Fundo do cabeçalho
    color: #fff; // Cor do texto no cabeçalho
  }

  td {
    background-color: #fff;
    color: #343a40; // Cor do texto nas células
  }

  img {
    border-radius: 5px;
  }
`;

// Estilo para os botões
export const Button = styled.button`
  padding: 8px 12px;
  margin: 5px;
  background-color: #007bff; // Azul padrão
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3; // Azul mais escuro no hover
  }

  &:active {
    transform: scale(0.95); // Efeito de clique
  }
`;

// Estilo para o Formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // Espaço entre os elementos do formulário
  margin-bottom: 20px;
`;

// Estilo para os inputs do formulário
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff; // Azul ao focar
  }
`;

// Estilo para os campos de texto grandes (textarea)
export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none; // Impede redimensionamento pelo usuário

  &:focus {
    outline: none;
    border-color: #007bff; // Azul ao focar
  }
`;
