import * as S from "./styles";

import { BiSearch } from "react-icons/bi";

type InputProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.Input
        id="character"
        autoComplete="off"
        placeholder="Que personagem você gostaria de buscar?"
        onChange={onChange}
      />
      <S.SearchIcon htmlFor="character">
        <BiSearch color="#76ED44" />
      </S.SearchIcon>
    </S.InputWrapper>
  );
};

export { Input };
