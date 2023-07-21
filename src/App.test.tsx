// TODO
import { render, screen } from "@testing-library/react";
import App from "./App";
import CharacterCard from "./components/CharacterCard";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { Character, useCharacters } from "./queries/character";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

jest.mock("./components/LoadingSkeleton");
jest.mock("./components/CharacterCard");
jest.mock("./queries/character");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe.skip("App", () => {
  const CharacterCardMock = CharacterCard as jest.Mock;
  const LoadingSkeletonMock = LoadingSkeleton as jest.Mock;
  const useCharactersMock = useCharacters as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("when we have data", () => {
    it("should not call Loading Skeleton", () => {
      useCharactersMock.mockImplementation(() => {
        return {
          data: {
            characters: {
              info: {
                pages: 1,
              },
              results: [{ id: "1" }],
            },
          },
          isLoading: false,
        };
      });
      render(<App />, { wrapper });
      expect(LoadingSkeletonMock).not.toHaveBeenCalled();
    });
    it("should  call CharacterCard", () => {
      useCharactersMock.mockImplementation(() => {
        return {
          data: {
            characters: {
              info: {
                pages: 1,
              },
              results: [{ id: "1" } as Character],
            },
          },
          isLoading: true,
        };
      });
      render(<App />, { wrapper });

      expect(CharacterCardMock).toHaveBeenCalled();
      expect(CharacterCardMock).toHaveBeenCalledTimes(1);
    });
  });
});
