import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem 0;
  position: relative;
`;

export const Image = styled.img`
  width: 25rem;
  height: 10rem;

  @media (max-width: 600px) {
    width: 15.25rem;
    height: 6.25rem;
  }
`;
