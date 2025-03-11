import styled from 'styled-components';

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

export const FooterContainer = styled.footer`
  background: ${gradientBackground2};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.56);
  padding-top: 3rem;
  padding-bottom: 1.5rem;

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
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
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
    margin-bottom: 0.75rem;
    color: ${colors.text};
    font-size: 0.9rem;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.text};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.1rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${colors.text};
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
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
  color: ${colors.text};

  svg {
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  color: ${colors.text};
  border-top: 1px solid ${colors.backgroundSecondary};
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  hr {
    margin-bottom: 2.5rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    width: 200px;
    font-size: 0.9rem;
    color: ${colors.text};
    margin-top: 0;

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