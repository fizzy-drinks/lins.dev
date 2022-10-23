import { differenceInMinutes } from 'date-fns';
import getRecentTracks from './getRecentTracks';
import recentTracksDb from './recentTracksDb';
import { LastfmRecentTracks } from 'types/lastfm';

const getLatestTrack = async (): Promise<LastfmRecentTracks | null> => {
  const db = await recentTracksDb();
  const cachedRecentTracks = await db.findOne();

  if (
    !cachedRecentTracks ||
    differenceInMinutes(new Date(), cachedRecentTracks.timestamp, {
      roundingMethod: 'floor',
    })
  ) {
    const newRecentTracks = await getRecentTracks(1).catch(() => null);
    if (!newRecentTracks) {
      return cachedRecentTracks;
    }

    cachedRecentTracks && db.deleteOne({ _id: cachedRecentTracks._id });
    db.insertOne({ ...newRecentTracks, timestamp: new Date() });
    return newRecentTracks;
  }

  return { recenttracks: cachedRecentTracks.recenttracks };
};

export default getLatestTrack;
