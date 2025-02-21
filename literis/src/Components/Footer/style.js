import styled from 'styled-components';

const lightBackground = "rgb(247, 247, 247)";

export const FooterContainer = styled.footer`
  background-color: ${lightBackground};
  border-top: 4px solid rgb(88, 42, 255);
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #333;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color:rgb(128, 0, 255);
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1rem;
  color: rgb(88, 42, 255);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #333;
    font-size: 1.5rem;

    &:hover {
      color: rgb(128, 0, 255);
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  color: #555;

  svg:hover {
    color: rgb(128, 0, 255);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  color: #000;
  border-top: 2px solid #ddd;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    font-size: 0.9rem;
    color: #777;
    margin-top: 0.5rem;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 480px) {
    width: 120px;
  }
`;