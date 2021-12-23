import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: color filter 0.3s;
  font-size: 1rem;
  border-radius: 4px;
  background: var(--green);

  &:hover&:not(:disabled) {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
