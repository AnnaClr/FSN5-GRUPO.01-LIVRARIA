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
export const HomeContainer = styled.div`
  background-color: ${colors.background};
  color: ${colors.text};
  font-family: "Inter", sans-serif;
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
    padding: 30px 20px;
    text-align: center;
  }

  img {
    width: 550px;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-top: 20px;
    }
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
    font-size: 22px;
    letter-spacing: 1px;
    text-align: center;
  }

  span.blue {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    color:rgb(59, 59, 59);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 6px;

    @media (max-width: 768px) {
      font-size: 14px;
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
    font-size: 14px;
    text-align: center;
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

  @media (max-width: 768px) {
    width: 40%;
    padding: 8px 16px;
    font-size: 10px;
  }
`;

// Seção de cards
export const Cards = styled.div`
  padding: 80px 100px;
  background: ${colors.background2};
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  .button-cards {
    margin-top: 60px;
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const CardsTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 60px;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const CardsContent = styled.div`
  display: flex;
  gap: 20px;

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
  margin-bottom: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .cardIcon {
    font-size: 50px;
    color: ${colors.primary};
    margin-bottom: 20px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 75%;
    padding: 16px;
    margin-bottom: 20px;

    .cardIcon {
      font-size: 40px;
      color: ${colors.primary};
      margin-bottom: 10px;
    }
  }
`;

export const CardIcon = styled.div`
  font-size: 48px;
  color: ${colors.primary};
  margin-bottom: 20px;

  .cardIcon {
    size: 64px;
  }

  @media (max-width: 768px) {
    font-size: 1px;
    margin-bottom: 10px;

    .cardIcon {
    size: 16px;
  }
  }
`;

export const CardNum = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardSubtitle = styled.div`
  font-size: 14px;
  color: ${colors.text};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Seção de vitrine
export const Vitrine = styled.div`
  padding: 80px 100px;
  background: ${colors.background3};

  @media (max-width: 768px) {
    padding: 30px 20px;
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
    font-size: 20px;
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
    flex-direction: column;
    padding: 20px;
  }
`;

export const BooksImg = styled.div`
  img {
    width: 220px;
    height: 350px;
    background-size: contain;
    background-position: center;
    margin-right: 40px;
    box-shadow: rgba(72, 72, 72, 0.38) 4px 4px 6px;

    @media (max-width: 768px) {
      width: 120px;
      height: 180px;
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
`;

export const VitrineText = styled.div`
  width: 650px;

  @media (max-width: 768px) {
    display: flex ;
    flex-direction: column;
    width: 100%;
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
    font-size: 12px;
    text-align: center;
  }
`;

// Seção de livros
export const Books = styled.div`
  padding: 80px 100px;
  background: ${colors.background2};

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const BooksTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 60px;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

export const BookCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {

    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const BookCard = styled.div`
  background: ${colors.background};
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 310px;
  height: 430px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 65%;
    height: auto;
    padding: 16px;
    margin-bottom: 10px;
  }
`;

export const BookCover = styled.div`
  width: 100%;
  height: 280px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const BookName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 3px;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 1px;
  }
`;

export const Author = styled.div`
  font-size: 12px;
  font-style: italic;
  font-weight: 500;
  color: ${colors.text};
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px;

  }
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  color:rgb(0, 210, 25);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const BookCardButton = styled.button`
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
    background-color: darken(${colors.secondary}, 10%);
  }

  @media (max-width: 768px) {
    width: 50%;
    max-width: 150px;
    padding: 8px 16px;
    font-size: 12px;
  }
`;