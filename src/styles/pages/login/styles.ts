import styled from "styled-components";
import { rgba } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 1rem;
`;

export const Aside = styled.aside`
 display: flex;
 align-items: center;
 justify-content: center;

  width: 40%;
  position: relative;

  svg {
    width: auto;
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;

  border-radius: 8px;
  border: 2px solid ${({ theme }) => rgba(theme.colors.primary, 0.5)};

  button {
    margin-top: 1rem !important;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
