import Head from 'next/head'

import Navigation from './Navigation'

import colors from '../config/colors'

const Page = props =>
  <div className='page component'>
    <Head>
      <title key='title'>{props.title} | lins.dev</title>
      <link key='font' href='https://fonts.googleapis.com/css?family=Heebo|Nanum+Gothic+Coding&display=swap' rel='stylesheet' />
    </Head>
    <Navigation />
    <main>
      {props.children}
    </main>
    <style global jsx>{`
    body {
      margin: 0
    }

    .page.component {
      font-family: Heebo, sans-serif;
      color: ${colors.black}
    }

    .page.component > * {
      padding-left: .5em;
      padding-right: .5em;
    }

    .page.component:last-child {
      padding-bottom: .5em;
    }

    a {
      color: ${colors.primary.dark}
    }
    `}</style>
  </div>

export default Page
