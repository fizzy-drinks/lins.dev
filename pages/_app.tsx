import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import PageLayout from 'components/PageLayout';
import LastfmProvider, {
  LastfmContextProps,
} from 'components/providers/LastfmProvider';
import ThemeProvider, { Theme } from 'components/providers/ThemeProvider';
import 'styles/global.css';

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
