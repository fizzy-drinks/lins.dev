import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import ThemeProvider from 'components/providers/ThemeProvider';
import 'styles/global.css';
import { LastfmRecentTracks } from 'types/lastfm';

const LDApp: FC<
  AppProps<SSRConfig & { darkMode: boolean; recentTracks?: LastfmRecentTracks }>
> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider darkMode={pageProps.darkMode}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(LDApp);
