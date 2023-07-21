import { Container, Pagination } from "@mui/material";
import "./App.css";

import { useState } from "react";
import Center from "./components/Center";
import CharacterCard from "./components/CharacterCard";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { useCharacters } from "./queries/character";

function App() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useCharacters(page);

  if (isLoading) return <LoadingSkeleton />;

  if (data) {
    const { info, results } = data.characters;
    return (
      <Container>
        <Center>
          <Pagination
            count={info.pages}
            page={page}
            onChange={(e, page) => {
              e.preventDefault();
              setPage(page);
            }}
            showFirstButton={true}
            showLastButton={true}
          />
        </Center>

        {results.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </Container>
    );
  }

  return <div>Unknown error occurred</div>;
}

export default App;
