import { useTranslation } from 'next-i18next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const HomePage = () => {
  const title = 'lins.dev';
  const description = "lins.dev's official page.";

  const { t } = useTranslation();

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
            <Link href='#' locale='en'>
              English
            </Link>
          </li>
          <li>
            <Link href='#' locale='pt'>
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
