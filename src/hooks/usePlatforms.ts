import React from 'react';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>('/xplatforms/lists/parents');

export default usePlatforms;
