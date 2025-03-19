import styled from "styled-components";

// Cores globais
const colors = {
  primary: "rgb(30, 90, 255)",
  secondary: "rgb(59, 59, 59)",
  background: "rgb(255, 255, 255)",
  background2: "rgb(245, 245, 245)",
  background3: "rgb(0, 136, 255)",
  backgroundSecondary: "#F3F4F6",
  text: "#374151",
  accent: "rgb(30, 90, 255)",
};

// Container principal
export const AboutContainer = styled.div`
  color: ${colors.text};
  font-family: "Inter", sans-serif;
`;

export const Garantias = styled.section`
  padding: 80px 100px;
  background: ${colors.background};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  background: ${colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const Text = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    font-size: 26px;
    letter-spacing: 2px;
  }

  span.blue {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    color:rgb(59, 59, 59);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 6px;

    @media (max-width: 768px) {
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.text};
  margin-bottom: 40px;
  line-height: 1.6;
  width: 600px;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 13px;
    text-align: center;
  }
`;

// Seção de capa
export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 100px;
  background: ${colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }

  img {
    width: 550px;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      margin-top: 20px;
    }
  }
`;

export const SectionImage = styled.img`
  width: 550px;
  height: 550px;
  background-size: cover;
  background-position: center;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const SectionText = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  font-size: 32px;
  color:rgb(59, 59, 59);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 6px;

  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

export const SectionParagraph = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

// Seção de cards
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    width: 80%;
    padding: 20px;
  }
`;

export const CardIcon = styled.div`
  font-size: 48px;
  color: ${colors.primary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  color: ${colors.text};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Formulário de Contato
export const Form = styled.div`
  background: ${colors.background2};
  width: 100%;
  max-width: 1320px;
  padding: 80px;

  @media (max-width: 768px) {
    padding: 20px 0.1px;
  }
`;

export const FormContainer = styled.form`
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    /* padding: 1rem; */
    max-width: 65%;
    /* max-height: 50%; */
    /* margin: 0; */
    /* gap: 1rem; */
  }
`;

export const FormInput = styled.input`
  padding: 12px;
  border: 2px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.text};
  background: ${colors.background};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0px 0px 8px rgba(30, 90, 255, 0.2);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 12px;
  border: 2px solid ${colors.backgroundSecondary};
  border-radius: 8px;
  font-size: 16px;
  color: ${colors.text};
  background: ${colors.background};
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0px 0px 8px rgba(30, 90, 255, 0.2);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
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
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${colors.text};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Seção de vitrine
export const Vitrine = styled.div`
  padding: 80px 100px;
  background: ${colors.background3};

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const VitrineTitle = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};
  text-shadow: 2px 2px 4px rgba(0, 85, 255, 0.28);
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BooksImg = styled.div`
  img {
    width: 400px;
    height: 400px;
    background-size: contain;
    background-position: center;
    margin-right: 40px;
    box-shadow: rgba(72, 72, 72, 0.38) 4px 4px 6px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-bottom: 20px;
    }
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
    background-color: ${colors.text};
  }

  @media (max-width: 768px) {
    width: 45%;
    padding: 8px;
    font-size: 12px;
  }
`;

export const VitrineText = styled.div`
  width: 650px;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;