import { useQuery } from "@tanstack/react-query";
import request, { gql } from "graphql-request";

const ENDPOINT = "https://rickandmortyapi.graphcdn.app/";

export const useCharacters = (page: number) =>
  useQuery<unknown, unknown, CharacterQueryResult>(
    [`characters_page${page}`],
    () => {
      return request(ENDPOINT, CHARACTER_QUERY(page));
    }
  );

export const CHARACTER_QUERY = (page: number) => gql`
  {
    characters(page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          episode
        }
        created
      }
    }
  }
`;
export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: Array<{
    episode: string;
  }>;
  created: string;
};
export type Info = {
  count: number;
  pages: number;
  next?: number;
  prev?: number;
};
export type CharacterQueryResult = {
  characters: {
    info: Info;
    results: Character[];
  };
};
