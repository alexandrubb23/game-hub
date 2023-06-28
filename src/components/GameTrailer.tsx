import useTrailers from '../hooks/useTrailers';

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      controls
      width='100%'
      poster={first.preview}
      controlsList='nodownload'
    />
  ) : null;
};

export default GameTrailer;
