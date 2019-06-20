import Router from 'next/router'
import Link from 'next/link'

import palette from '../config/colors'

const isRouteActive = route =>
  typeof window !== 'undefined' && route === Router.route

const NavBarLink = ({ route, label, onClick }) =>
  <Link href={route}>
    <a title={label} onClick={onClick} className={`${isRouteActive(route) ? 'active' : ''}`}>
      {label}
      <style jsx>{`
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 5em;
        padding: .5em;

        color: inherit;
        text-decoration: none;
        transition: all 300ms ease;
        border-width: 0;
      }

      a:hover,
      a:focus {
        background-color: ${palette.white.alpha(.4)};
        border-width: 0;
      }

      a.active {
        background-color: ${palette.white.alpha(.15)};
        pointer-events: none;
      }

      @media (max-width: 540px) {
        a {
          flex: 1 1 auto;
          width: 100%;
        }
      }
      `}</style>
    </a>
  </Link>

export default NavBarLink
