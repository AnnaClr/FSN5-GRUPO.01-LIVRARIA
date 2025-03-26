import styled from 'styled-components';

// Paleta de cores
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "rgb(255, 255, 255)",
  background2: "rgb(250, 250, 250)",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background: ${colors.background};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
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
    border-color: ${colors.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.text};
  }
`;

export const RegisterLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: ${colors.text};

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const SocialButton = styled.button`
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
  background: ${colors.background};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.background2};
  }
`;

export const GoogleButton = styled(SocialButton)`
  color: ${colors.text};
`;

export const FacebookButton = styled(SocialButton)`
  color: #1877F2;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  span {
    padding: 0 10px;
    color: ${colors.text};
    font-size: 14px;
    background: ${colors.background};
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
`;