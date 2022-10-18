import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import PageContainer from 'components/ui/PageContainer';
import PageHeader from 'components/PageHeader';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'https://lins.dev'}
        openGraph={{
          url: 'https://lins.dev',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <PageHeader />
    </PageContainer>
  );
};

export default HomePage;
