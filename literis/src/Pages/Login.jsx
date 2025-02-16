import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      login(); // Autentica o usuário
      toast.success('Login realizado com sucesso!');
      navigate('/'); // Redireciona para a página inicial
    } else {
      toast.error('Preencha todos os campos!');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
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
      <Button onClick={handleLogin}>Entrar</Button>
      <RegisterLink>
        Não tem uma conta? <Link to="/register">Registre-se</Link>
      </RegisterLink>
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterLink = styled.p`
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Login;