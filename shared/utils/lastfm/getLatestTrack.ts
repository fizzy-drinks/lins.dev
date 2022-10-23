import { differenceInMinutes } from 'date-fns';
import getRecentTracks from './getRecentTracks';
import recentTracksDb from './recentTracksDb';
import { LastfmRecentTracks } from 'types/lastfm';

const getLatestTrack = async (): Promise<LastfmRecentTracks | null> => {
  const db = await recentTracksDb();
  const recentTracks = await db.findOne();

  if (
    !recentTracks ||
    differenceInMinutes(new Date(), recentTracks.timestamp, {
      roundingMethod: 'floor',
    })
  ) {
    const newRecentTracks = await getRecentTracks(1).catch(() => undefined);
    if (!newRecentTracks) {
      return recentTracks;
    }

    recentTracks && db.deleteOne({ _id: recentTracks._id });
    db.insertOne({ ...newRecentTracks, timestamp: new Date() });
    return newRecentTracks;
  }

  return { recenttracks: recentTracks.recenttracks };
};

export default getLatestTrack;
