import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8218b7c8826e4983bc81e11fb1c78bae',
  },
});
