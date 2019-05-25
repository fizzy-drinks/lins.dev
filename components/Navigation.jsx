import Link from 'next/link'

const Navigation = () =>
  <nav>
    <Link href='/'>
      <a title='Home page'>Home</a>
    </Link>
    <Link href='/contact'>
      <a title='Contact page'>Contact</a>
    </Link>
    <Link href='/projects'>
      <a title='Projects page'>Projects</a>
    </Link>
  </nav>

export default Navigation
