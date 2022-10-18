import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import Image from 'next/image';
import TextLinkStyle from 'components/ui/TextLinkStyle';
import RangoImage from 'assets/rango.png';
import MainContent from 'components/ui/MainContent';

const RangoPage: FC = () => {
  const { t } = useTranslation();

  return (
    <MainContent>
      <NextSeo
        title={`${t('pages.rango.title')} | ${t('seo.title')}`}
        description={t('pages.rango.description')}
        canonical={'https://lins.dev/rango'}
        openGraph={{
          url: 'https://lins.dev/rango',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
      />
      <main>
        <figure className='text-center'>
          <Image
            src={RangoImage}
            alt={t('pages.rango.title')}
            placeholder='blur'
            className='rounded-md shadow-lg shadow-neutral-500'
          />
        </figure>
        <h1 className='text-4xl text-neutral-500 mt-2'>
          {t('pages.rango.title')}
        </h1>
        <p className='mt-2'>{t('pages.rango.description')} 🥪</p>
        <nav className='text-center text-sm mt-2'>
          <a href='https://rango.lins.dev'>
            <TextLinkStyle>{t('cta.view')}</TextLinkStyle>
          </a>{' '}
          |{' '}
          <a
            href='https://github.com/fizzy-drinks/rango'
            target='_blank'
            rel='noreferrer'
          >
            <TextLinkStyle>{t('cta.source')}</TextLinkStyle>
          </a>
        </nav>
      </main>
    </MainContent>
  );
};

export default RangoPage;
