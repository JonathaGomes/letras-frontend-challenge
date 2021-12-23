import * as S from "./styles";

const NoResults = () => {
  return (
    <S.Container>
      <S.Image src="/no-results.png" alt="Sem resultados" />
      <S.Text>
        Nenhum resultado para o personagem pesquisado <span>:(</span>
      </S.Text>
    </S.Container>
  );
};

export { NoResults };
