import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import TextLinkStyle from 'components/ui/TextLinkStyle';
import MainContent from 'components/ui/MainContent';

const RangoPage: FC = () => {
  const { t } = useTranslation();

  const links = [
    { href: 'https://github.com/fizzy-drinks', content: 'Github' },
    { href: 'https://gitlab.com/fizzydrinks', content: 'GitLab' },
  ];

  return (
    <MainContent>
      <NextSeo
        title={`${t('pages.links.title')} | ${t('seo.title')}`}
        description={t('pages.links.description')}
        canonical={'https://lins.dev/links'}
        openGraph={{
          url: 'https://lins.dev/links',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
      />
      <main className='w-full max-w-[460px] text-left'>
        <h1 className='text-4xl text-neutral-500 mt-2'>
          {t('pages.links.title')}
        </h1>
        <p className='mt-2'>{t('pages.links.description')}</p>
        <ul className='mt-2'>
          {links.map(({ href, content }) => (
            <li className='list-item mt-2' key={href}>
              <a href={href} target='_blank' rel='noreferrer'>
                <TextLinkStyle>{content}</TextLinkStyle>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </MainContent>
  );
};

export default RangoPage;