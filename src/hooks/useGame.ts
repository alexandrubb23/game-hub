import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService, { Game } from '../services/gameService';

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ['game', slug],
    queryFn: () => gameService.getOne(slug),
    staleTime: ms('24h'),
  });

export default useGame;
