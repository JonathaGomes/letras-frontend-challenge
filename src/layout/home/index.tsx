import { useState, useEffect } from "react";
import Head from "next/head";
import { Input, Cards, Loading, Pagination, Filter, NoResults } from "@/common";
import { client } from "@/services";
import { gql } from "@apollo/client";
import * as S from "./styles";

type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
};

type Response = {
  characters: {
    results: Character[];
  };
};

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // limit api page 42

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { data } = await client.query<Response>({
        query: gql`
						query Query {
							characters(page: ${page}, filter: { name: "${searchValue}", species: "${filterValue}" }) {
								results {
									id
									name
									image
									species
								}
							}
						}
					`,
        errorPolicy: "all",
      });
      setLoading(false);
      if (!data.characters) {
        setData([]);
        return;
      }
      setData(data.characters.results);
    }

    getData();
  }, [page, searchValue, filterValue]);

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
    //const filteredData = filterData();
    //setData(filteredData);
  }

  function handlePaginate(op: "next" | "prev") {
    if (op === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  }

  function handleFilter(value: string) {
    setFilterValue(value);
  }

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta
          name="description"
          content="Venha pesquisar sobre seus personangens favoritos de Rick and Morty"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <S.Container>
        <S.Image src="/logo.png" alt="Rick and Morty" />
        <Input onChange={onChange} />

        {!loading && data.length === 0 && <NoResults />}

        {!loading && data.length > 0 && (
          <>
            {/*<Filter handleFilter={handleFilter} />*/}
            <Cards data={data} />
          </>
        )}

        {!loading && data.length > 0 && (
          <Pagination page={page} handlePaginate={handlePaginate} />
        )}

        {loading && <Loading />}
      </S.Container>
    </>
  );
};

export { HomePage };
