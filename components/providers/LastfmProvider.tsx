import { createContext, FC, PropsWithChildren } from 'react';
import { LastfmRecentTracks } from 'types/lastfm';

export interface LastfmContextProps {
  recentTracks?: LastfmRecentTracks;
}

export const LastfmContext = createContext<LastfmContextProps>({
  recentTracks: {
    recenttracks: {
      track: [],
      '@attr': {
        page: '1',
        perPage: '5',
        total: '10',
        totalPages: '2',
        user: 'foobar',
      },
    },
  },
});

const LastfmProvider: FC<PropsWithChildren<LastfmContextProps>> = ({
  recentTracks,
  children,
}) => {
  return (
    <LastfmContext.Provider value={{ recentTracks }}>
      {children}
    </LastfmContext.Provider>
  );
};

export default LastfmProvider;
