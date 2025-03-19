import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
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

const SellerRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);
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

  const handleRegister = () => {
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


    login();
    toast.success('Registro realizado com sucesso!');
    navigate('/bookstore');
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
          Já tem uma conta? <Link to="/seller-login">Faça login</Link>
        </RegisterLink>
      </FormContainer>
    </Container>
  );
};

export default SellerRegister;