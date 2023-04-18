import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<GamesResponse>('/xgames')
      .then(response => {
        setGames(response.data.results);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {games.map(game => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GameGrid;
