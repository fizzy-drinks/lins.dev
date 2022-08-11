import LocaleButton from 'components/LocaleButton';
import InteractiveText from 'components/ui/InteractiveText';
import TextBlock from 'components/ui/TextBlock';
import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { FC } from 'react';

const HomePage: FC = () => {
  const { t } = useTranslation();

  const title = t('seo.title');
  const description = t('seo.description');

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={'https://lins.dev'}
        openGraph={{
          url: 'https://lins.dev',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      <header>
        <img src='/ld.png' alt='lins.dev logo' />
        <h1>lins.dev</h1>
        <nav>
          <ul>
            <li className='list-item m-2'>
              <InteractiveText>
                <a
                  href='https://github.com/fizzy-drinks'
                  target='_blank'
                  className='ds-text-link'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </InteractiveText>
            </li>
            <li className='list-item m-2'>
              <InteractiveText>
                <a
                  href='https://gitlab.com/fizzydrinks'
                  target='_blank'
                  className='ds-text-link'
                  rel='noreferrer'
                >
                  GitLab
                </a>
              </InteractiveText>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <LocaleButton locale='en' />
          </li>
          <li>
            <LocaleButton locale='pt' />
          </li>
        </ul>
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
              <InteractiveText>
                <Link legacyBehavior={false} href='/old/contact'>
                  {t('navigation.contactInfo')}
                </Link>
              </InteractiveText>
            </li>
            <li className='list-item m-2'>
              <InteractiveText>
                <Link legacyBehavior={false} href='/old/projects'>
                  {t('navigation.projects')}
                </Link>
              </InteractiveText>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default HomePage;
