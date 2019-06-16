import Link from 'next/link'

import palette from '../config/colors'

const NavBarLink = ({ route, label, onClick }) =>
  <Link href={route}>
    <a title={label} onClick={onClick}>
      {label}
      <style jsx>{`
      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 5em;
        padding: .5em;

        color: ${palette.white};
        text-decoration: none;
        transition: all 300ms ease;
        border-width: 0;
      }

      a:hover,
      a:focus {
        background-color: ${palette.white.alpha(.4)};
        border-width: 0;
      }
      `}</style>
    </a>
  </Link>

export default NavBarLink
