import APIClient from './api-client';
import { Platform } from './platformService';

export interface Game {
  id: number;
  description_raw: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
}

export default new APIClient<Game>('/games');
