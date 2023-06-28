import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';

interface Game {
  id: number;
  description_raw: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
  slug: string;
}

export default Game;
