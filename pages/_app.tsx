import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import Twemoji from 'react-twemoji';

import 'styles/global.css';

const AppRoot: FC<AppProps> = ({ Component, pageProps }) => (
  <Twemoji>
    <Component {...pageProps} />
  </Twemoji>
);

export default appWithTranslation(AppRoot);
