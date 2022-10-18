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
        canonical={'https://lins.dev/rango'}
        openGraph={{
          url: 'https://lins.dev/rango',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <div className='flex flex-col justify-between grow basis-1'>
        <PageHeader />
        <figure>
          <img src='/images/rango.png' alt='Rango' />
        </figure>
      </div>
      <main className='w-[500px] text-left grow basis-1'>
        <h1 className='text-4xl text-neutral-500 mt-2'>{t('pages.rango.title')}</h1>
        <p className='mt-2'>{t('pages.rango.description')} 🥪</p>
      </main>
    </PageContainer>
  );
};

export default HomePage;
