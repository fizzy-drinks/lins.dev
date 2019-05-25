import Link from 'next/link'

import Logo from './Logo'
import NavBarLink from './NavBarLink'

const links = [
  { route: '/', label: 'Home' },
  { route: '/contact', label: 'Contato' },
  { route: '/projects', label: 'Projetos' },
]

const Navigation = () =>
  <header>
    <Link href='/'>
      <h1 title='Home'>
        <Logo />
      </h1>
    </Link>
    <nav>
      {links.map(NavBarLink)}
    </nav>
    <style jsx>{`
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0;
      font-size: 1em;
      cursor: pointer;
    }

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      flex-grow: 1;
    }
    `}</style>
  </header>

export default Navigation
