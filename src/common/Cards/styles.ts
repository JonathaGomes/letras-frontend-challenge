import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 7.75rem 10rem 0 10rem;

  @media (max-width: 600px) {
    margin: 2.5rem 10rem 0 10rem;
  }
`;

export const Card = styled.div`
  height: 14rem;
  width: 14rem;
  position: relative;
  cursor: pointer;

  &:hover > img {
    filter: brightness(0.7);
  }

  &:hover > span {
    opacity: 1;
  }

  @media (max-width: 600px) {
    height: 10rem;
    width: 10rem;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  transition: filter 0.5s;

  @media (max-width: 600px) {
    filter: brightness(0.8);
  }
`;

export const Text = styled.span`
  opacity: 0;
  transition: opacity 0.5s;
  position: absolute;
  bottom: 1.25rem;
  left: 1rem;
  font-weight: 700;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    opacity: 1;
  }
`;
