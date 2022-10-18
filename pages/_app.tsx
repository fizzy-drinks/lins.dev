import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import Twemoji from 'react-twemoji';
import PageContainer from 'components/ui/PageContainer';
import PageHeader from 'components/PageHeader';

import 'styles/global.css';

declare module 'react-twemoji' {
  interface TwemojiProps {
    id: string;
  }
}

const LDApp: FC<AppProps<SSRConfig>> = ({ Component, pageProps }) => {
  return (
    <>
      <Twemoji id='twemoji'>
        <PageContainer>
          <PageHeader />
          <Component {...pageProps} />
        </PageContainer>
      </Twemoji>
    </>
  );
};

export default appWithTranslation(LDApp);
