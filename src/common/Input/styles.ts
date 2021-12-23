import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 28rem;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 4.375rem;

  @media (max-width: 600px) {
    width: 21rem;
    margin-top: 2.875rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  color: var(--blue);
  background: none;
  border: none;
  font-size: 1.125rem;
  outline: 0;
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--green);

  &::placeholder {
    color: var(--blue);
  }

  &:focus {
    border-bottom: 2px solid var(--blue);
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

export const SearchIcon = styled.label`
  position: absolute;
  right: 0;
  top: 0.2rem;
  cursor: pointer;
`;
