import Head from 'next/head'

import Navigation from './Navigation'

import palette from '../config/colors'

const breakpoints = [0, 600, 1024]
const pBaseFontSizeEm = [1, 1.15, 1.3]
const headerH1ToTextRatio = [1.5, 2, 2.5]
const headerStepDownsizingRatio = [.95, .95, .85]

const textSizesCssString = breakpoints
  .map((minWidth, ii) =>
    `@media (min-width: ${minWidth}px) {
      ${Array(6)
        .fill(headerH1ToTextRatio[ii] * pBaseFontSizeEm[ii])
        .map((h1Size, jj) => h1Size * (Math.pow(headerStepDownsizingRatio[ii], jj)))
        .map((size, ii) =>
          `h${ii + 1} {
            font-size: ${size}em;
            margin: 1em 0 .5em
          }`)
        .join``
        .concat(`p { font-size: ${pBaseFontSizeEm[ii]}em }`)}
    }`)
  .join``

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

    ${textSizesCssString}

    p {
      max-width: 840px;
      line-height: 200%;
    }

    .page.component {
      font-family: Heebo, sans-serif;
    }

    .page.component:last-child {
      padding-bottom: .5em;
    }

    a, .link {
      color: ${palette.primary.darken(.2)};
      text-decoration: none;
      border: ${palette.gray.rgb()} 0 solid;
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

    .greyed.out {
      color: ${palette.gray.rgb()}
    }
    `}</style>
  </div>

export default Page
