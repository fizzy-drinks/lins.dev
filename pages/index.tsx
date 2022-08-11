import { NextSeo } from 'next-seo';
import Link from 'next/link';

const HomePage = () => {
  const title = 'lins.dev';
  const description = "lins.dev's official page.";
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
        <ul>
          <li>
            <a href='https://github.com/fizzy-drinks'>GitHub</a>
          </li>
          <li>
            <a href='https://gitlab.com/fizzydrinks'>GitLab</a>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Hi!</h1>
          <p>This site is undergoing a major overhaul.</p>
          <p>
            If you want to check out my contact information or some links to
            projects, feel free to do so with the links below, but please
            don&apos;t mind the page design! Also, the page is in Portuguese,
            but it shouldn&apos;t be too hard to navigate.
          </p>
        </section>
        <nav>
          <ul>
            <li>
              <Link href='/old/contact'>Contact information</Link>
            </li>
            <li>
              <Link href='/old/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
};

export default HomePage;
