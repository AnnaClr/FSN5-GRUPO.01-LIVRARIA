import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc'; 
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      login();
      toast.success('Login realizado com sucesso!');
      navigate('/');
    } else {
      toast.error('Preencha todos os campos!');
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
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

const ForgotPassword = styled(Link)`
  display: block;
  margin: 10px 0;
  color: #6a11cb;
  text-decoration: none;
  font-size: 14px;
  text-align: end;

  &:hover {
    text-decoration: underline;
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

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const GoogleButton = styled(SocialButton)`
  color: #333;
`;

const FacebookButton = styled(SocialButton)`
  color: #1877F2;
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #333;

  a {
    color: #6a11cb;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Login;