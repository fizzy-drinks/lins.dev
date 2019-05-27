import Link from 'next/link'

import colors from '../config/colors'

const NavBarLink = ({ route, label }) =>
  <Link key={route} href={route}>
    <a title={label}>
      {label}
      <style jsx>{`
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 5em;
        padding: .5em;

        color: ${colors.white};
        text-decoration: none;
        transition: all 300ms ease;
      }

      a:first-of-type {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
      }

      a:last-of-type {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;        
      }

      a:hover,
      a:focus {
        color: ${colors.black};
        background-color: ${colors.white};
      }
      `}</style>
    </a>
  </Link>

export default NavBarLink
