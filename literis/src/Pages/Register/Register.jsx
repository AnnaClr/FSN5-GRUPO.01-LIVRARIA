import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
  Container,
  FormContainer,
  Input,
  Button,
  Divider,
  SocialButtons,
  GoogleButton,
  FacebookButton,
  RegisterLink,
} from './style';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // Adicionando o campo de nome
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Função para validar o formato do e-mail
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    // Validações básicas
    if (!name) {
      toast.error('Por favor, insira seu nome.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Por favor, insira um e-mail válido.');
      return;
    }

    if (!password) {
      toast.error('Por favor, insira uma senha.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }

    try {
      // Fazendo a requisição para o backend
      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'Erro ao registrar usuário.');
        return;
      }

      toast.success('Conta criada com sucesso!');
      localStorage.setItem('token', data.token); // Armazenando o token JWT
      login({ email, token: data.token }); // Atualiza o estado global do usuário no contexto

      navigate('/'); // Redireciona para a página principal
    } catch (error) {
      toast.error('Erro ao conectar com o servidor.');
      console.error('Erro no registro:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>Registro</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button onClick={handleRegister}>Criar Conta</Button>

        <Divider>
          <span>OU</span>
        </Divider>

        <SocialButtons>
          <GoogleButton>
            <FcGoogle size={20} />
            <span>Logar com Google</span>
          </GoogleButton>
          <FacebookButton>
            <FaFacebook size={20} color="#1877F2" />
            <span>Logar com Facebook</span>
          </FacebookButton>
        </SocialButtons>

        <RegisterLink>
          Já tem uma conta? <Link to="/login">Faça login</Link>
        </RegisterLink>
      </FormContainer>
    </Container>
  );
};

export default Register;
