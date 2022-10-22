import enhanceProps from './enhanceProps';
import getRecentTracks from 'shared/utils/lastfm/getRecentTracks';

const withRecentTracks = enhanceProps(async () => ({
  props: { recentTracks: await getRecentTracks(1) },
}));

export default withRecentTracks;
