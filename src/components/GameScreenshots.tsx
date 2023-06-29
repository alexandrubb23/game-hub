import {
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={5}>
      {data?.results.map(file => (
        <Image key={file.id} src={file.image} alt='Game screenshot' />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
