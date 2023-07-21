import { gql } from "graphql-request";

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
          id
          name
        }
        location {
          name
          id
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
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
  image: string;
  episode: {
    episode: string;
  };
  created: string;
};
export type CharacterQueryResult = {
  characters: {
    info: {
      count: number;
      pages: number;
      next?: number;
      prev?: number;
    };
    results: Character[];
  };
};
