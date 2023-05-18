import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8218b7c8826e4983bc81e11fb1c78bae',
  },
});

class APIClient<T> {
  constructor(private ebdpoint: string) {
    this.ebdpoint = ebdpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.ebdpoint, config)
      .then(res => res.data);
  };
}

export default APIClient;
