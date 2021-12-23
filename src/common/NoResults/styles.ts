import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 44rem;
  height: 28rem;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 43.75%,
    rgba(0, 0, 0, 0.79) 94.27%
  );

  @media (max-width: 600px) {
    width: 100%;
    height: 16rem;
  }
`;

export const Text = styled.p`
  font-size: 3rem;
  font-weight: 800;
  position: absolute;
  bottom: 4rem;
  text-align: center;

  span {
    color: var(--blue);
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
