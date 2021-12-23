import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.375rem;
`;

export const LoadingImage = styled.img`
  width: 20rem;
  height: 20rem;
  animation: loading 3s infinite;

  @media (max-width: 600px) {
    width: 15rem;
    height: 15rem;
  }

  @keyframes loading {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const LoadingText = styled.h2`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingBall = styled.div`
  margin-left: 0.5rem;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: var(--white);
  animation: loadingBall 1s infinite;
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes loadingBall {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }
`;
