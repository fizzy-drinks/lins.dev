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

        color: ${colors.black};
        text-decoration: none;
        transition: all 300ms ease;
      }

      a:hover,
      a:focus {
        background-color: ${colors.primary.lightest}40;
      }
      `}</style>
    </a>
  </Link>

export default NavBarLink
