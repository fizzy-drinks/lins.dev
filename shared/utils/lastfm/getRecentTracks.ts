import getConfig from 'next/config';
import get from '../get';
import { LastfmRecentTracks } from 'types/lastfm';

const {
  serverRuntimeConfig: { lastfm },
} = getConfig();

const api = 'https://ws.audioscrobbler.com/2.0/';

const getRecentTracks = (limit: number): Promise<LastfmRecentTracks> => {
  const query = {
    method: 'user.getrecenttracks',
    format: 'json',
    limit: limit.toString(),
    extended: '1',
    user: lastfm.user,
    api_key: lastfm.apiKey,
  };

  return get({ url: api, query });
};

export default getRecentTracks;
