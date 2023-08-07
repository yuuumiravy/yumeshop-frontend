import styled from '@emotion/styled';
import { colors } from './tokens';

export const TokenTest = styled.div`
  background: ${colors.YumeGreen};
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0 0;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  margin: 32px 0;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
`;
