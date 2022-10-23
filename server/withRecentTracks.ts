import enhanceProps from './enhanceProps';
import getLatestTrack from 'shared/utils/lastfm/getLatestTrack';

const withRecentTracks = enhanceProps(async () => ({
  props: { recentTracks: await getLatestTrack() },
}));

export default withRecentTracks;
