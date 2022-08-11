import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';

import 'styles/global.css';

const AppRoot: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default appWithTranslation(AppRoot);
