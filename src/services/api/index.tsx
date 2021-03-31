import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SPOTIFY_URL}/browse`,
});

export default api;
