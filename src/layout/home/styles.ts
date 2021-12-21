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

export const FilterContainer = styled.div`
  /*position: absolute;
  right: 0;
  top: 0;*/
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  width: 7.5rem;
  height: 4rem;
  border-radius: 4px;
  box-shadow: -1px 1px 1px var(--green);
`;

export const FilterItem = styled.p`
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1rem;
  &:hover {
    color: var(--green);
  }
`;
