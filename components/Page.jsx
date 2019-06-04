import Head from 'next/head'

import Navigation from './Navigation'

import colors from '../config/colors'

const Page = props =>
  <div className='page component'>
    <Head>
      <title key='title'>{props.title} | lins.dev</title>
      <meta key='theme' name='theme-color' content={colors.primary.dark} />
      <link key='font' href='https://fonts.googleapis.com/css?family=Heebo|Nanum+Gothic+Coding&display=swap' rel='stylesheet' />
    </Head>
    <Navigation />
    <main>
      {props.children}
    </main>
    <style global jsx>{`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      color: ${colors.black}
    }

    .page.component {
      font-family: Heebo, sans-serif;
    }

    main > * {
      padding-left: .5em;
      padding-right: .5em;
    }

    .page.component:last-child {
      padding-bottom: .5em;
    }

    a, .link {
      color: ${colors.primary.dark};
      text-decoration: none;
      border: ${colors.gray.main} 0 solid;
      border-bottom-width: 1px;
      transition: all 300ms ease;
      cursor: pointer;
    }

    a:active,
    a:hover,
    a:focus,
    .link:active,
    .link:hover,
    .link:focus {
      border-bottom-width: 4px;
      border-color: ${colors.primary.lightest};
    }
    `}</style>
  </div>

export default Page
