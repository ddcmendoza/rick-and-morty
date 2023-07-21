import { Button, Container } from "@mui/material";
import request from "graphql-request";
import "./App.css";

import { useState } from "react";
import { useQuery } from "react-query";
import { CHARACTER_QUERY, CharacterQueryResult } from "./queries/character";
import CharacterCard from "./components/CharacterCard";

const ENDPOINT = "https://rickandmortyapi.graphcdn.app/";

function App() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useQuery<unknown, unknown, CharacterQueryResult>(
    `characters_page${page}`,
    () => {
      return request(ENDPOINT, CHARACTER_QUERY(page));
    }
  );

  if (data) {
    const { info, results } = data.characters;
    return (
      <Container>
        {results.map((c) => {
          return <CharacterCard key={c.id} character={c} />;
        })}
        <Button onClick={() => setPage((p) => info.prev ?? p)}> Prev </Button>
        <Container>
          {page} of {info.pages}
        </Container>
        <Button onClick={() => setPage((p) => info.next ?? p)}> Next </Button>
      </Container>
    );
  }
  if (isLoading) return <>"Loading..."</>;

  return <div>Unknown error occured</div>;
}

export default App;
