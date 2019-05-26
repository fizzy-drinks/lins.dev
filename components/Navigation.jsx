import Link from 'next/link'
import classnames from 'classnames'

import { MdMenu, MdClose } from 'react-icons/md'

import Logo from './Logo'
import NavBarLink from './NavBarLink'

import  colors from '../config/colors'

const links = [
  { route: '/', label: 'Home' },
  { route: '/contact', label: 'Contato' },
  { route: '/projects', label: 'Projetos' },
]

class Navigation extends React.Component {
  constructor () {
    super()

    this.state = {
      menu: false
    }
  }

  render () {
    return (
      <header>
        <Link href='/'>
          <h1 title='Home'>
            <Logo />
          </h1>
        </Link>
        <button className='open nav button' onClick={() => this.setState({ menu: true })}>
          <MdMenu size={24} />
        </button>
        <nav className={classnames({ show: this.state.menu })}>
          <div className='close nav wrapper'>
            <button className='close nav button' onClick={() => this.setState({ menu: false })}>
              <MdClose size={24} />
            </button>
          </div>
          {links.map(NavBarLink)}
        </nav>
        <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding-top: .5em;
          padding-bottom: .5em;
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
        }

        .close.nav.wrapper {
          align-items: center;
          justify-content: flex-end;
          width: 100%;
        }

        .open.nav.button,
        .close.nav.button {
          display: none;
          width: 32px;
          height: 32px;
          align-items: center;
          justify-content: center;

          background: none;
          margin: 0;
          padding: 0;
          border: 0;
        }

        @media (max-width: 540px) {
          .close.nav.wrapper,
          .open.nav.button,
          .close.nav.button {
            display: flex;
          }

          a:hover,
          a:focus {
            background-color: ${colors.primary.lightest}40;
          }

          nav {
            position: fixed;
            top: 0;
            left: 0;

            width: calc(100vw - 1em);
            height: calc(100vh - 1em);

            padding: .5em;

            flex-direction: column;
            justify-content: flex-start;

            background: ${colors.white};

            display: none;
          }

          nav.show {
            display: flex;
          }
        }
        `}</style>
      </header>
    )
  }
}

export default Navigation
