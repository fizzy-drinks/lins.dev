import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { FC } from 'react';
import TextBlock from 'components/ui/TextBlock';
import TextLink from 'components/ui/TextLink';
import LocaleSwitcher from 'components/LocaleSwitcher';

const HomePage: FC = () => {
  const { t } = useTranslation();

  const title = t('seo.title');
  const description = t('seo.description');

  return (
    <div className='container mx-auto p-1'>
      <NextSeo
        title={title}
        description={description}
        canonical={'https://lins.dev'}
        openGraph={{
          url: 'https://lins.dev',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <header className='flex justify-between items-center my-2'>
        <img src='/ld.png' alt='lins.dev logo' className='h-10' />
        <nav>
          <ul className='flex items-center gap-1'>
            <li>
              <TextLink>
                <a
                  href='https://github.com/fizzy-drinks'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </TextLink>
            </li>
            <li>
              <TextLink>
                <a
                  href='https://gitlab.com/fizzydrinks'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitLab
                </a>
              </TextLink>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <TextBlock variant='h1'>
            <h1>{t('greeting')}</h1>
          </TextBlock>
          <TextBlock variant='synopsis'>
            <p>{t('maintenance.summary')}</p>
          </TextBlock>
          <TextBlock variant='paragraph'>
            <p>{t('maintenance.explanation')}</p>
          </TextBlock>
        </section>
        <nav>
          <ul>
            <li className='list-item m-2'>
              <TextLink>
                <Link legacyBehavior={false} href='/old/contact'>
                  {t('navigation.contactInfo')}
                </Link>
              </TextLink>
            </li>
            <li className='list-item m-2'>
              <TextLink>
                <Link legacyBehavior={false} href='/old/projects'>
                  {t('navigation.projects')}
                </Link>
              </TextLink>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default HomePage;
