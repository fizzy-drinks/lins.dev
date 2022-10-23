import { FC, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import TextLinkStyle from './ui/TextLinkStyle';
import { LastfmRecentTracks } from 'types/lastfm';
import get from 'shared/utils/get';
import useLastfm from 'hooks/useLastfm';

const RecentTracksDisplay: FC = () => {
  const { recentTracks } = useLastfm();
  const [track, setTrack] = useState(recentTracks?.recenttracks.track[0]);
  useInterval(() => {
    const url = new URL(window.location.href);
    url.pathname = '/api/now-playing';

    get<LastfmRecentTracks>({ url }).then(
      ({
        recenttracks: {
          track: [track],
        },
      }) => setTrack(track)
    );
  }, 60_000);

  return (
    <AnimatePresence>
      {track && (
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
      )}
    </AnimatePresence>
  );
};

export default RecentTracksDisplay;
