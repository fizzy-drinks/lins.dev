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
    {props.children}
    <style jsx>{`
    .page.component {
      font-family: Heebo, sans-serif;
      color: ${colors.black}
    }
    `}</style>
  </div>

export default Page
