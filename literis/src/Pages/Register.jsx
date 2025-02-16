import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        login(); // Autentica o usuário
        toast.success('Registro realizado com sucesso!');
        navigate('/'); // Redireciona para a página inicial
      } else {
        toast.error('As senhas não coincidem!');
      }
    } else {
      toast.error('Preencha todos os campos!');
    }
  };

  return (
    <Container>
      <h1>Registro</h1>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Registrar</Button>
      <LoginLink>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </LoginLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginLink = styled.p`
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Register;