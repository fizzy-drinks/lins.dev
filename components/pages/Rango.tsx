import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC } from 'react';
import RangoImage from 'assets/rango.png';
import MainContent from 'components/MainContent';
import TextLinkStyle from 'components/TextLinkStyle';
import TextTitleStyle from 'components/TextTitleStyle';
import useSeo from 'hooks/useSeo';

const RangoPage: FC = () => {
  const { t } = useTranslation();
  const seo = useSeo({
    uri: '/rango',
    title: t('pages.rango.title'),
    description: t('pages.rango.description'),
  });

  return (
    <MainContent>
      <main>
        {seo}
        <figure className='text-center'>
          <Image
            src={RangoImage}
            alt={t('pages.rango.title')}
            placeholder='blur'
            className='rounded-md shadow-lg shadow-highlight dark:shadow-highlight-dark'
          />
        </figure>
        <TextTitleStyle>
          <h1>{t('pages.rango.title')}</h1>
        </TextTitleStyle>
        <p className='mt-2'>{t('pages.rango.description')} 🥪</p>
        <nav className='text-center text-sm mt-2'>
          <a href='https://rango.lins.dev' target='_blank' rel='noreferrer'>
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
