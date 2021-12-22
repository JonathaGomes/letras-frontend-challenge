import styled, { css } from "styled-components";

type FilterItemProps = {
  active: boolean;
};

export const FilterContainer = styled.div`
  position: relative;
  left: 37rem;
  top: 4rem;

  @media (max-width: 1348px) {
    left: 29rem;
  }

  @media (max-width: 1010px) {
    left: 22rem;
  }

  @media (max-width: 756px) {
    left: 14rem;
  }

  @media (max-width: 600px) {
    left: 10rem;
    top: -15rem;
  }
`;

export const Filter = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  background-color: var(--black);
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

export const FilterItem = styled.p<FilterItemProps>`
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1rem;

  ${({ active }) =>
    active &&
    css`
      color: var(--green);
    `}

  &:hover {
    color: var(--green);
  }
`;
