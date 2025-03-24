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
  const [name, setName] = useState(''); // Adicionando o estado para o nome
  const { login } = useContext(AuthContext); // Usando a função login do contexto
  const navigate = useNavigate();

  // Função para validar o formato do e-mail
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Função para validar a senha
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleRegister = async () => {
    // Validação do nome
    if (!name) {
      toast.error('Por favor, insira seu nome.');
      return;
    }

    // Validação do e-mail
    if (!email) {
      toast.error('Por favor, insira seu e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Por favor, insira um e-mail válido.');
      return;
    }

    // Validação da senha
    if (!password) {
      toast.error('Por favor, insira sua senha.');
      return;
    }
    if (!validatePassword(password)) {
      toast.error(
        'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.'
      );
      return;
    }

    // Validação da confirmação de senha
    if (!confirmPassword) {
      toast.error('Por favor, confirme sua senha.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }), // Enviando o nome para o backend
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Erro ao registrar usuário.');
        return;
      }

      toast.success('Conta criada com sucesso!');
      localStorage.setItem('token', data.token); // Armazena o token JWT
      login({ email, token: data.token }); // Usando a função login para atualizar o contexto

      navigate('/'); // Redireciona para a página principal

    } catch (error) {
      toast.error('Erro ao conectar com o servidor.');
      console.error('Erro no registro:', error);
    }
  };

  const handleGoogleLogin = () => {
    toast.info('Login com Google selecionado');
  };

  const handleFacebookLogin = () => {
    toast.info('Login com Facebook selecionado');
  };

  return (
    <Container>
      <FormContainer>
        <h1>Registro</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)} // Adicionando controle do campo de nome
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

        <Button onClick={handleRegister}>Criar conta</Button>

        <Divider>
          <span>OU</span>
        </Divider>

        <SocialButtons>
          <GoogleButton onClick={handleGoogleLogin}>
            <FcGoogle size={20} />
            <span>Logar com Google</span>
          </GoogleButton>
          <FacebookButton onClick={handleFacebookLogin}>
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
