import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import * as S from "./styles";

type PaginationProps = {
  page: number;
  handlePaginate: (op: "prev" | "next") => void;
};

const Pagination = ({ handlePaginate, page }: PaginationProps) => {
  return (
    <S.Container>
      <S.PaginationButton
        disabled={page <= 1}
        onClick={() => handlePaginate("prev")}
      >
        <MdKeyboardArrowLeft size={24} />
      </S.PaginationButton>
      <S.PaginationButton>{page}</S.PaginationButton>
      <S.PaginationButton
        disabled={page >= 42}
        onClick={() => handlePaginate("next")}
      >
        <MdKeyboardArrowRight size={24} />
      </S.PaginationButton>
    </S.Container>
  );
};

export { Pagination };
