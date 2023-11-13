import getConfig from 'next/config';
import get from '../get';
import { LastfmRecentTracks } from 'types/lastfm';

const {
  serverRuntimeConfig: { lastfm },
} = getConfig();

const api = 'https://ws.audioscrobbler.com/2.0/';

const getRecentTracks = async (
  limit: number
): Promise<LastfmRecentTracks | null> => {
  const query = {
    method: 'user.getrecenttracks',
    format: 'json',
    limit: limit.toString(),
    extended: '1',
    user: lastfm.user,
    api_key: lastfm.apiKey,
  };

  try {
    const res = await get<LastfmRecentTracks>({ url: api, query });

    // apparently sometimes Lastfm's API returns a different format
    if (!Array.isArray(res.recenttracks.track)) {
      res.recenttracks.track = [res.recenttracks.track];
    }

    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default getRecentTracks;
