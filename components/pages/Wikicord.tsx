import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC } from 'react';
import WikicordImage from 'assets/wikicord.png';
import MainContent from 'components/MainContent';
import TextLinkStyle from 'components/TextLinkStyle';
import TextTitleStyle from 'components/TextTitleStyle';
import useSeo from 'hooks/useSeo';

const WikicordPage: FC = () => {
  const { t } = useTranslation();
  const seo = useSeo({
    uri: '/wikicord',
    title: t('pages.wikicord.title'),
    description: t('pages.wikicord.description'),
  });

  return (
    <MainContent>
      <main>
        {seo}
        <figure className='text-center'>
          <Image
            src={WikicordImage}
            alt={t('pages.wikicord.title')}
            placeholder='blur'
            width={460}
            height={243}
            className='rounded-md shadow-lg shadow-highlight dark:shadow-highlight-dark'
          />
        </figure>
        <TextTitleStyle>
          <h1>{t('pages.wikicord.title')}</h1>
        </TextTitleStyle>
        <p className='mt-2'>{t('pages.wikicord.description')} 📖</p>
        <nav className='text-center text-sm mt-2'>
          <a href='https://wikicord.lins.dev' target='_blank' rel='noreferrer'>
            <TextLinkStyle>{t('cta.view')}</TextLinkStyle>
          </a>{' '}
          |{' '}
          <a
            href='https://github.com/fizzy-drinks/wikicord'
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

export default WikicordPage;
