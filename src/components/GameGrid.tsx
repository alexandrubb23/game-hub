import { useEffect, useState } from 'react';

import apiClient from '../services/api-client';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

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
