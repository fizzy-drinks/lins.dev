import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import { FC } from 'react';
import PageContainer from 'components/ui/PageContainer';
import PageHeader from 'components/PageHeader';
import TextLinkStyle from 'components/ui/TextLinkStyle';

const RangoPage: FC = () => {
  const { t } = useTranslation();

  const links = [
    { href: 'https://github.com/fizzy-drinks', content: 'Github' },
    { href: 'https://gitlab.com/fizzydrinks', content: 'GitLab' },
    { href: 'https://linkedin.com/in/gabrielchiconi', content: 'LinkedIn' },
    { href: 'https://rxresu.me/fizzydrinks/full-stack-web', content: 'CV' },
  ];

  return (
    <PageContainer>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        canonical={'https://lins.dev/links'}
        openGraph={{
          url: 'https://lins.dev/links',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <div className='w-full basis-1 grow'>
        <PageHeader />
      </div>
      <div className='grow basis-1 flex items-center'>
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
      </div>
      <div className='basis-1 grow' />
    </PageContainer>
  );
};

export default RangoPage;
