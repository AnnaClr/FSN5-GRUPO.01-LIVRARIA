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

  img {
    width: 550px;
    height: 550px;
    background-size: cover;
    background-position: center;
    border-radius: 16px;
  }
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

// Seção de cards
export const Cards = styled.div`
  padding: 80px 100px;
  background: ${colors.background2};
  justify-content: center;
  align-items: center;

  .button-cards {
    margin-top: 60px;
    display: flex;
    gap: 20px;
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
`;

export const CardsContent = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
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

export const CardNum = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 10px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 10px;
`;

export const CardSubtitle = styled.div`
  font-size: 14px;
  color: ${colors.text};
  line-height: 1.6;
`;

// Seção de vitrine
export const Vitrine = styled.div`
  padding: 80px 100px;
  background: ${colors.background3};
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
    width: 220px;
    height: 350px;
    background-size: contain;
    background-position: center;

    margin-right: 40px;
    box-shadow: rgba(72, 72, 72, 0.38) 4px 4px 6px;
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

// Seção de livros
export const Books = styled.div`
  padding: 80px 100px;
  background: ${colors.background2};
`;

export const BooksTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 60px;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;
`;

export const BookCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 16px;
  padding: 24px;
  width: 300px;
  height: 550px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const BookCover = styled.div`
  width: 100%;
  height: 380px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const BookName = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: 5px;
`;

export const Author = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  color: ${colors.text};
  margin-bottom: 15px;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  color:rgb(0, 210, 25);
  margin-bottom: 20px;
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
`;