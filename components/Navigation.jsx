import Link from 'next/link'
import classnames from 'classnames'

import { MdMenu, MdClose } from 'react-icons/md'

import WidthContainer from './WidthContainer'
import Logo from './Logo'
import NavBarLink from './NavBarLink'

import palette from '../config/colors'

const links = [
  { route: '/', label: 'Home' },
  { route: '/contact', label: 'Contato' },
  { route: '/projects', label: 'Projetos' },
]

const headerSettings = {
  size: '4em',
  border: '2px',
  pad: '.5em'
}

class Navigation extends React.Component {
  constructor () {
    super()

    this.state = {
      menu: false
    }
  }

  render () {
    return [
      <div key='margin' className='header margin'>
        <style jsx>{`
        .header.margin {
          position: relative;
          margin-bottom: calc(${headerSettings.size} - ${headerSettings.border});
        }
        `}</style>
      </div>,
      <header key='header'>
        <WidthContainer>
          <div className='flex row'>
            <Link href='/'>
              <h1 title='Home'>
                <Logo />
              </h1>
            </Link>
            <button className='open nav button' onClick={() => this.setState({ menu: true })}>
              <MdMenu size={24} color={palette.white} />
            </button>
            <nav className={classnames({ show: this.state.menu })}>
              <div className='close nav wrapper'>
                <button className='close nav button' onClick={() => this.setState({ menu: false })}>
                  <MdClose size={24} color={palette.white} />
                </button>
              </div>
              {links.map(link =>
                <NavBarLink
                  key={link.label}
                  route={link.route}
                  label={link.label}
                  onClick={() => this.setState({ menu: false })}
                />
              )}
            </nav>
          </div>
        </WidthContainer>
        <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;

          border-bottom: ${palette.black} ${headerSettings.border} solid;
          height: ${headerSettings.size};

          background-color: ${palette.primary};
        }

        .flex.row {
          width: 100%;
          height: ${headerSettings.size};
          padding: ${headerSettings.pad};

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
          background-color: ${palette.primary};
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
            background-color: ${palette.primary.alpha(.4).lighten(.2)};
          }

          nav {
            position: fixed;
            top: 0;
            left: 0;

            width: 100vw;
            height: 100vh;

            padding: .5em;

            flex-direction: column;
            justify-content: flex-start;

            display: none;
          }

          nav.show {
            display: flex;
          }
        }
        `}</style>
      </header>
    ]
  }
}

export default Navigation
