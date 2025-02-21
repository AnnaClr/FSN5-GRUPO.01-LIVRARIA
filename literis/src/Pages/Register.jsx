import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        login();
        toast.success('Registro realizado com sucesso!');
        navigate('/');
      } else {
        toast.error('As senhas não coincidem!');
      }
    } else {
      toast.error('Preencha todos os campos!');
    }
  };

  const handleGoogleLogin = () => {
    // Lógica para login com Google
    toast.info('Login com Google selecionado');
  };

  const handleFacebookLogin = () => {
    // Lógica para login com Facebook
    toast.info('Login com Facebook selecionado');
  };

  return (
    <Container>
      <FormContainer>
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
        <Divider>ou</Divider>
        <FcGoogle onClick={handleGoogleLogin} />
        <FaFacebook onClick={handleFacebookLogin} />
        <p>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </p>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 380px;
  padding: 12px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6a11cb;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #6a11cb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2575fc;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  span {
    padding: 0 10px;
    color: #888;
    font-size: 14px;
    background: white;
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
`;

export default Register;