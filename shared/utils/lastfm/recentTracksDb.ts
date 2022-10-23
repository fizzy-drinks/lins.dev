import { Collection, MongoClient } from 'mongodb';
import getConfig from 'next/config';
import { LastfmRecentTracks } from 'types/lastfm';

const {
  serverRuntimeConfig: { mongodb },
} = getConfig();

type RecentTracksObject = LastfmRecentTracks & { timestamp: Date };

const recentTracksDb = async (): Promise<Collection<RecentTracksObject>> => {
  const client = new MongoClient(mongodb.uri);
  await client.connect();

  return client.db('linsdev').collection<RecentTracksObject>('recent_tracks');
};

export default recentTracksDb;
