import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color:rgb(255, 255, 255);
  border-top: 6px solid #007bff;
  padding: 2rem 4rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

export const FooterSection = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #007bff;
    }
  }
`;

export const SectionTitle = styled.h4`
  font-size: 1.1rem;
  color: #007bff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #333;
    font-size: 1.5rem;

    &:hover {
      color: #007bff;
    }
  }
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  color: #555;

  svg:hover {
    color: #007bff;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.9rem;
  color: #777;
  border-top: 2px solid #ddd;
  margin-top: 1.5rem;
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
  }
`;

export const LogoImage = styled.img`
  width: 150px;
  height: auto;
`;