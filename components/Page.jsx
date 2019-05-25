import Head from 'next/head'
import Navigation from './Navigation'

const Page = props =>
  <div className='page component'>
    <Head>
      <link key='font-imports' href='https://fonts.googleapis.com/css?family=Heebo&display=swap' rel='stylesheet' />
    </Head>
    <Navigation />
    {props.children}
    <style jsx>{`
    .page.component {
      font-family: Heebo, sans-serif;
    }
    `}</style>
  </div>

export default Page
