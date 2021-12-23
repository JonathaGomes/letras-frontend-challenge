import { useState } from "react";

import { RiFilter2Line } from "react-icons/ri";

import * as S from "./styles";

type FilterProps = {
  handleFilter: (value: string) => void;
};

const Filter = ({ handleFilter }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  return (
    <S.Container>
      <RiFilter2Line
        style={{ cursor: "pointer" }}
        size={24}
        color="#76ED44"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <S.Filter>
          <S.FilterItem
            active={activeItem === "alien"}
            onClick={() => {
              handleFilter("alien");
              setActiveItem("alien");
              setIsOpen(!isOpen);
            }}
          >
            👽 Alien
          </S.FilterItem>
          <S.FilterItem
            active={activeItem === "human"}
            onClick={() => {
              handleFilter("human");
              setActiveItem("human");
              setIsOpen(!isOpen);
            }}
          >
            👤 Human
          </S.FilterItem>
        </S.Filter>
      )}
    </S.Container>
  );
};

export { Filter };
