import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import Script from 'next/script';
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
        <Script id='gtm' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG2J8HB');`}
        </Script>
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
