import { FC, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { motion } from 'framer-motion';
import TextLinkStyle from './ui/TextLinkStyle';
import { LastfmRecentTracks } from 'types/lastfm';
import get from 'shared/utils/get';

const RecentTracksDisplay: FC<{ recentTracks: LastfmRecentTracks }> = ({
  recentTracks,
}) => {
  const [track, setTrack] = useState(recentTracks.recenttracks.track[0]);
  useInterval(() => {
    const url = new URL(window.location.href);
    url.pathname = '/api/recent-tracks';

    get<LastfmRecentTracks>({ url }).then(
      ({
        recenttracks: {
          track: [track],
        },
      }) => setTrack(track)
    );
  }, 30_000);

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.8 }}
      className='text-xs text-center whitespace-nowrap text-ellipsis overflow-hidden'
    >
      <a href={track.url} target='_blank' rel='noreferrer'>
        <span>🎧</span>{' '}
        <TextLinkStyle>
          <span className='hidden md:inline'>{track.artist.name} - </span>
          {track.name}
        </TextLinkStyle>
      </a>
    </motion.aside>
  );
};

export default RecentTracksDisplay;
