import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

const HomePage = () => {
  const { t } = useTranslation();
  const [, setCookie] = useCookies();

  const title = t('seo.title');
  const description = t('seo.description');

  const setPreferredLocale = (locale: string) =>
    setCookie('NEXT_LOCALE', locale, { path: '/' });

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
            <li>
              <a href='https://github.com/fizzy-drinks'>GitHub</a>
            </li>
            <li>
              <a href='https://gitlab.com/fizzydrinks'>GitLab</a>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <Link
              legacyBehavior={false}
              href='#'
              locale='en'
              onClick={() => setPreferredLocale('en')}
            >
              English
            </Link>
          </li>
          <li>
            <Link
              legacyBehavior={false}
              href='#'
              locale='pt'
              onClick={() => setPreferredLocale('pt')}
            >
              Português
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>{t('greeting')}</h1>
          <p>{t('maintenance.summary')}</p>
          <p>{t('maintenance.explanation')}</p>
        </section>
        <nav>
          <ul>
            <li>
              <Link href='/old/contact'>{t('navigation.contactInfo')}</Link>
            </li>
            <li>
              <Link href='/old/projects'>{t('navigation.projects')}</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default HomePage;
