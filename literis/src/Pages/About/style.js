import styled from "styled-components";

// Cores globais
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "#FFFFFF",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

const gradientBackground = "linear-gradient(to right,rgb(255, 255, 255), rgb(240, 240, 240))";
const gradientBackground2 = "linear-gradient(to left,rgb(255, 255, 255), rgb(240, 240, 240))";
const gradientBackground3 = "linear-gradient(to left,rgb(0, 136, 255), rgb(73, 137, 255))";

// Container principal
export const AboutContainer = styled.div`
  color: ${colors.text};
  font-family: "Inter", sans-serif;
`;

export const Form = styled.section`
  padding: 80px 100px;
  background: ${gradientBackground2};
`;

export const Garantias = styled.section`
  padding: 80px 100px;
  background: ${gradientBackground};
`;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  background: ${gradientBackground};
`;

export const Text = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  width: 800px;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  color:rgb(30, 90, 255);
  text-shadow: 2px 2px 4px rgba(0, 85, 255, 0.28);
  text-transform: uppercase;
  letter-spacing: 4px;

  span.blue {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    color:rgb(59, 59, 59);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 6px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.text};
  margin-bottom: 40px;
  line-height: 1.6;
  width: 600px;
  text-align: justify;
`;

// Seção de capa
export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  background: ${gradientBackground};

  img {
    width: 550px;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;
  }
`;

export const SectionImage = styled.img`
    width: 550px;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;
`;

export const SectionText = styled.div`
  width: 50%;
`;

export const SectionTitle = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 32px;
    color:rgb(59, 59, 59);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 6px;
`;

export const SectionParagraph = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 40px;
`;

// Seção de cards
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
`;

export const Card = styled.div`
  background-color: ${colors.background};
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  width: 30%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const CardIcon = styled.div`
  font-size: 48px;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: ${colors.text};
  line-height: 1.6;
`;

// Formulário de Contato
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormInput = styled.input`
  padding: 12px;
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.text};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const FormTextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.text};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const FormButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.background};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(${colors.primary}, 10%);
  }
`;

// Seção de vitrine
export const Vitrine = styled.div`
  padding: 80px 100px;
  background: ${gradientBackground3};
`;

export const VitrineTitle = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};

  text-shadow: 2px 2px 4px rgba(0, 85, 255, 0.28);
  letter-spacing: 4px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const BooksImg = styled.div`
  img {
    width: 400px;
    height: 400px;
    background-size: contain;
    background-position: center;

    margin-right: 40px;
    box-shadow: rgba(72, 72, 72, 0.38) 4px 4px 6px;
  }
`;

export const Button = styled.button`
  background-color: ${colors.accent};
  color: ${colors.background};
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(${colors.accent}, 10%);
  }
`;

export const VitrineText = styled.div`
  width: 650px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 40px;
`;