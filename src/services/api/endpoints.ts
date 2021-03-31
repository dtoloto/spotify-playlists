import axios from 'axios';
import { format } from 'date-fns';
import api from '.';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const base64Credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
  'base64',
);

export const getFilters = async () => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_FILTER_API}`);
    return data;
  } catch (err) {
    throw new Error('Filed to get filters');
  }
};

export const auth = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const { data } = await axios.post(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64Credentials}`,
        },
      },
    );
    api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
  } catch (err) {
    throw new Error('Filed to auth');
  }
};

interface IPlaylists {
  country: string;
  locale: string;
  pattern: string;
}

export const getPlaylists = async ({
  country,
  locale,
  pattern,
}: IPlaylists) => {
  try {
    const timestamp = format(
      new Date().getTime(),
      pattern.split('T').join(`'T'`),
    );

    const { data } = await api.get('/featured-playlists', {
      params: {
        country,
        locale,
        timestamp,
      },
    });

    return data;
  } catch (err) {
    throw new Error('Filed to get playlists');
  }
};
