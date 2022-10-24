import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import ThemeProvider, { Theme } from 'components/providers/ThemeProvider';
import 'styles/global.css';
import LastfmProvider, {
  LastfmContextProps,
} from 'components/providers/LastfmProvider';
import PageLayout from 'components/PageLayout';

const LDApp: FC<
  AppProps<SSRConfig & LastfmContextProps & Theme & { statusCode?: number }>
> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider darkMode={pageProps.darkMode}>
      <LastfmProvider recentTracks={pageProps.recentTracks}>
        {pageProps?.statusCode ? (
          <Component {...pageProps} />
        ) : (
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        )}
      </LastfmProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(LDApp);
