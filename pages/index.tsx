import Link from 'next/link';

const HomePage = () => (
  <main>
    <h1>Hi!</h1>
    <p>This site is undergoing a major overhaul.</p>
    <p>
      If you want to check out my contact information or some links to projects,
      feel free to check it out with the links below, but please don&apos;t mind
      the page design! Also, the page is in Portuguese, but it shouldn&apos;t be
      too hard to navigate.
    </p>
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
);

export default HomePage;
