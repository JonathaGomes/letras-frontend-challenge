import * as S from "./styles";

const Loading = () => {
  return (
    <S.Container>
      <S.LoadingImage src="/loading.png" alt="Carregando dados" />
      <S.LoadingText>
        Carregando
        <S.LoadingBall />
        <S.LoadingBall />
        <S.LoadingBall />
      </S.LoadingText>
    </S.Container>
  );
};

export { Loading };
