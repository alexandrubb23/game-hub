import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService from '../services/gameService';
import { Game } from '../entities/Game';

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ['game', slug],
    queryFn: () => gameService.getOne(slug),
    staleTime: ms('24h'),
  });

export default useGame;
