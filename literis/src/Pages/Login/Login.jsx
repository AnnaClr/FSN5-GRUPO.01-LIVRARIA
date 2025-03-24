import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Importando o AuthContext
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
  Wrapper,
  LoginBox,
  Input,
  Button,
  ForgotPassword,
  Divider,
  SocialButtons,
  GoogleButton,
  FacebookButton,
  RegisterLink,
} from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); // Acessando a função login do AuthContext
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

  // Função de login com o backend
  const handleLogin = async () => {
    if (!email) {
      toast.error('Por favor, insira seu e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Por favor, insira um e-mail válido.');
      return;
    }
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

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || 'Erro ao fazer login.');
        return;
      }

      // Atualizando o contexto com os dados do usuário
      login({
        email: data.user.email, // Armazenando o e-mail do usuário
        token: data.token, // Armazenando o token JWT
      });

      toast.success('Login realizado com sucesso!');
      navigate('/'); // Redireciona para a página principal
    } catch (error) {
      toast.error('Erro ao conectar com o servidor.');
      console.error('Erro no login:', error);
    }
  };

  const handleGoogleLogin = () => {
    toast.info('Login com Google selecionado');
  };

  const handleFacebookLogin = () => {
    toast.info('Login com Facebook selecionado');
  };

  return (
    <Wrapper>
      <LoginBox>
        <h1>LOGIN</h1>
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
        <ForgotPassword to="/forgot-password">Esqueceu sua senha?</ForgotPassword>
        <Button onClick={handleLogin}>Entrar</Button>

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
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </RegisterLink>
      </LoginBox>
    </Wrapper>
  );
};

export default Login;
