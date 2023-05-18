import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchResponse } from '../services/api-client';
import gameService, { Game } from '../services/gameService';

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      console.log({ pageParam });
      return gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
