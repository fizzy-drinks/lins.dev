import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'https://lins.dev'}
        openGraph={{
          url: 'https://lins.dev',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
      />
    </>
  );
};

export default HomePage;
