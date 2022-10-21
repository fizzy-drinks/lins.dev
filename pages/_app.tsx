import { appWithTranslation, SSRConfig } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC } from 'react';
import PageContainer from 'components/ui/PageContainer';
import PageHeader from 'components/PageHeader';
import LoaderBar from 'components/ui/LoaderBar';
import 'styles/global.css';
import ThemeProvider from 'components/ThemeProvider';

const LDApp: FC<AppProps<SSRConfig & { darkMode: boolean }>> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <LoaderBar />
      <ThemeProvider darkMode={pageProps.darkMode}>
        <PageContainer>
          <PageHeader />
          <Component {...pageProps} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(LDApp);
