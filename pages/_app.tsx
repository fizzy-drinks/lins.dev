import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import Twemoji from 'react-twemoji';

import 'styles/global.css';

declare module 'react-twemoji' {
  interface TwemojiProps {
    id: string;
  }
}

const LDApp: FC<AppProps<SSRConfig>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href='http://fonts.cdnfonts.com/css/merriweather-sans'
          rel='stylesheet'
        />
      </Head>
      <Twemoji id='twemoji'>
        <Component {...pageProps} />
      </Twemoji>
    </>
  );
};

export default appWithTranslation(LDApp);
