import * as S from "./styles";

type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
};

type CardsProps = {
  data: Character[];
};

const Cards = ({ data }: CardsProps) => {
  return (
    <S.Container>
      {data.map((item) => {
        return (
          <S.Card key={item.id}>
            <S.Image src={item.image} alt={item.name} />
            <S.Text>
              {item.name} - {item.species}
            </S.Text>
          </S.Card>
        );
      })}
    </S.Container>
  );
};

export { Cards };
