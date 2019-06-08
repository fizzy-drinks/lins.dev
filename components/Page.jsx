import Head from 'next/head'

import Navigation from './Navigation'

import palette from '../config/colors'

const Page = props =>
  <div className='page component'>
    <Head>
      <title key='title'>{props.title} | lins.dev</title>
      <meta key='theme' name='theme-color' content={palette.primary} />
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
      color: ${palette.black}
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
      color: ${palette.primary.darken(.2)};
      text-decoration: none;
      border: ${palette.black.alpha(.2)} 0 solid;
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
      border-color: ${palette.warn};
    }
    `}</style>
  </div>

export default Page
