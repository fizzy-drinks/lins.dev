import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import Image from 'next/image';
import PageContainer from 'components/ui/PageContainer';
import PageHeader from 'components/PageHeader';
import TextLinkStyle from 'components/ui/TextLinkStyle';
import RangoImage from 'assets/rango.png';

const RangoPage: FC = () => {
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
      <div className='w-full flex flex-col justify-between items-center grow basis-1'>
        <div className='w-full'>
          <PageHeader />
        </div>
        <figure>
          <Image
            src={RangoImage.src}
            width={RangoImage.width}
            height={RangoImage.height}
            alt={t('pages.rango.title')}
            className='rounded-md shadow-lg shadow-neutral-500'
          />
        </figure>
      </div>
      <main className='max-w-[460px] text-left grow basis-1'>
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
    </PageContainer>
  );
};

export default RangoPage;
